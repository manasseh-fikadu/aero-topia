import { NextFunction, Request, Response } from 'express'
import model from './model'
import dataAccessLayer from '../../common/dal'
import { CustomError } from '../../middleware/errorModel'
import { streamUpload } from '../../services/cloudinary/bucket';
import IPartnerInterface from './interface';
const DAL = dataAccessLayer(model)


const create_partner = async (req: Request, res: Response, next: NextFunction) => {
  const newPartner = req.body
  
  DAL.createOne(newPartner)
  .then(async (data: IPartnerInterface) => {
    if (!data) {
      return res
        .status(400)
        .json(new CustomError("Cannot create", 400));
    }

    res.status(201).json(data);
  })
  .catch((err: Error) => {
    next(err);
  }); 
}

const getAll = (req: Request, res: Response, next: NextFunction) => {
    const filter =  { isActive: true }

    DAL.getAll(filter)
      .then((data: any) => {
        if (!data) {
          throw new CustomError('Data not found', 404, data)
        }
        res.status(200).json(data)
      })
      .catch((err) => {
        next(err)
      })
  }

  
  
  const update = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const changedProps = req.body
    DAL
      .updateOne(changedProps, id)
      .then((data) => {
        if (!data) {
          throw new CustomError('Cannot update', 400)
        }
        res.status(200).json(data)
      })
      .catch((err) => {
        next(err)
      })
    
}

const upload = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id

  streamUpload(req, 'logo')
        .then((resultURL:any) => {
            if (resultURL) {
                DAL.updateOne({ logo: resultURL }, id)
                    .then((data) => {
                        if (!data) {
                            throw new CustomError('Cannot update ', 400)
                        }
                        res.status(200).json({ message: 'image upload successfully', data })
                    })
                    .catch((err) => {
                        res.status(400).json(err)
                    })
            } else {
                res.status(400).json({ message: 'error uploading media to storage' })
            }
        })
        .catch((err: Error) => {
            next(err)
        })
        
} 

const delete_partner =  (req: Request, res: Response, next: NextFunction) => {
    const partnerId = req.params.id
       DAL.deleteOne(partnerId)
        .then((data) => {
          if (!data) {
            throw new CustomError('Cannot delete user', 404)
          }
          res.status(200).json({ message: 'Account deleted', data })
        })
        .catch((err) => {
          next(err)
        })
  
}


  export default {
    getAll,
    update,
    upload,
    delete_partner,
    create_partner,
  }