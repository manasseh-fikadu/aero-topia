import { NextFunction, Request, Response } from 'express'
import model from './model'
import dataAccessLayer from '../../common/dal'
import { CustomError } from '../../middleware/errorModel'
import about_usModel from '../about_us/model'
import email_htmls from "../../common/email_htmls"
import { sendMail } from  '../../services/email/mail'
import IContactUsInterface from './interface'

const DAL = dataAccessLayer(model)
const AboutUsDal = dataAccessLayer(about_usModel)

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

  
  
  const send_email= async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body
    const company_info:any = await AboutUsDal.getOne({})

    const credentials: any = {
        to: company_info.email,
        subject: "Aerotopia customers service",
        email: user.email,
        name: user.name,
        message: user.message
      };

      const email_content = email_htmls.contact_us(credentials);
      credentials["html"] = email_content;

      const Email = await sendMail(credentials);
      if (!Email) {
        return res
          .status(404)
          .json(new CustomError("Server Error, please try again later", 404));
      }
      user.sent = true
      DAL.createOne(user)
      .then(async (data: IContactUsInterface) => {
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
    send_email,
  }