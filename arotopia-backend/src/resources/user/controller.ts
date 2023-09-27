import { NextFunction, Request, Response } from 'express'
import model from './model'
import dataAccessLayer from '../../common/dal'
import { CustomError } from '../../middleware/errorModel'
import { streamUpload } from '../../services/cloudinary/bucket';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import IUserInterface from './interface';

const DAL = dataAccessLayer(model)

const login = (req: Request, res: Response, next: NextFunction) => {
  let { email, password } = req.body;

  DAL.getOne({ email: email })
    .then((user: any) => {
      if (user && !user.isActive)
        throw new CustomError(
          "Account has been deactivated, please contact the admin",
          401
        );

      if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign(
          { sub: user._id, role: user.role },
          process.env.JWT_SECRET || "499238@@#adnnc%%",
        );
        const { password, ...userWithoutPassword } = user;
        console.log("this is token", token)
        res.status(200).json({
          ...userWithoutPassword,
          token,
        });
      } else {
        return res.status(401).json({ message: "Wrong Credentials" });
      }
    })
    .catch((err: Error) => {
      next(err);
    });
};

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
    const userId = req.params.id
        streamUpload(req, 'profilePhoto')
        .then((resultURL:any) => {
            if (resultURL) {
                DAL.updateOne({ profilePhoto: resultURL }, userId)
                    .then((data) => {
                        if (!data) {
                            throw new CustomError('Cannot update User', 400)
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
const create_user = async(req: Request, res: Response, next: NextFunction) => {

    const newUser = req.body
    const emailExists = await DAL.getOne({ email: newUser.email });
    
    if (!emailExists) {
  
      newUser.password = bcrypt.hashSync(newUser.password, 12);
      
      DAL.createOne(newUser)
        .then(async (data: IUserInterface) => {
          if (!data) {
            return res
              .status(400)
              .json(new CustomError("Cannot create User", 400));
          }
  
          res.status(201).json(data);
        })
        .catch((err: Error) => {
          next(err);
        });
    } else {
      return res
        .status(409)
        .json(new CustomError("An account already exists with this email", 409));
    }
    
}

const delete_user =  (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id
       DAL.deleteOne(userId)
        .then((data) => {
          if (!data) {
            throw new CustomError('Cannot delete service', 404)
          }
          res.status(200).json({ message: 'Work deleted', data })
        })
        .catch((err) => {
          next(err)
        })
  
}


  export default {
    getAll,
    update,
    upload,
    delete_user,
    login,
    create_user,
  }