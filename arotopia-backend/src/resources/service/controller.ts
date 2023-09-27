import { NextFunction, Request, Response } from 'express'
import model from './model'
import dataAccessLayer from '../../common/dal'
import { CustomError } from '../../middleware/errorModel'
import { streamUpload } from '../../services/cloudinary/bucket';
import IServiceInterface from './interface';
const DAL = dataAccessLayer(model)

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
       
        streamUpload(req, 'media')
        .then((resultURL:any) => {
            if (resultURL) {
                DAL.updateOne({ media: resultURL }, id )
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

const delete_service =  (req: Request, res: Response, next: NextFunction) => {
    const serviceId = req.params.id
       DAL.deleteOne(serviceId)
        .then((data) => {
          if (!data) {
            throw new CustomError('Cannot delete service', 404)
          }
          res.status(200).json({ message: 'Service deleted', data })
        })
        .catch((err) => {
          next(err)
        })
  
}


const create_service = async (req: Request, res: Response, next: NextFunction) => {
  const newService = req.body

  DAL.createOne(newService)
  .then(async (data: IServiceInterface) => {
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



  export default {
    getAll,
    update,
    upload,
    delete_service,
    create_service,
  }