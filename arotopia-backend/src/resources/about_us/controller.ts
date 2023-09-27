import { NextFunction, Request, Response } from 'express'
import model from './model'
import dataAccessLayer from '../../common/dal'
import { CustomError } from '../../middleware/errorModel'
import { streamUpload } from '../../services/cloudinary/bucket';
import IAboutUsInterface from './interface';
const DAL = dataAccessLayer(model)

const getAll = (req: Request, res: Response, next: NextFunction) => {
    const filter = { }
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
        
    const changedProps = req.body
    DAL
      .update(changedProps)
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

const upload = async (req: Request, res: Response, next: NextFunction) => {
        const about_us: any  = await DAL.getOne({})

        streamUpload(req, 'logo')
        .then((resultURL:any) => {
            if (resultURL) {
                DAL.updateOne({ logo: resultURL }, about_us._id)
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

const create_about_us = async (req: Request, res: Response, next: NextFunction) => {
  const newService = req.body
  DAL.createOne(newService)
  .then(async (data: IAboutUsInterface) => {
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
    create_about_us,
  }