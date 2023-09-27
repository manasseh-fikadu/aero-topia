// import Joi, { ObjectSchema } from "joi";
// import { NextFunction, Request, Response } from "express";
// import IUserInterface from "../resources/user/interface";


// export const JoiObjectId = Joi.extend({
//   type: "objectId",
//   base: Joi.string(),
//   messages: {
//     objectId: '"{{#label}}" must be a valid ObjectId(fix it)',
//   },
//   validate(value, helpers) {
//     if (!/^[0-9a-fA-F]{24}$/.test(value)) {
//       return { value, errors: helpers.error("objectId") };
//     }
//   },
// });

// export const validateJoi = (schema: ObjectSchema) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await schema.validateAsync(req.body);
//     } catch (error) {
//       return res.status(422).json({ error });
//     }
//     next();
//   };
// };

// export const Schemas = {
//   user: {
//     signup: Joi.object<IUserInterface>({
//       firstName: Joi.string().alphanum().min(2).max(30).required(),
//       lastName: Joi.string().alphanum().min(2).max(30).required(),
//       email: Joi.string().email().required(),
//       gender: Joi.string().min(4).max(6).required(),
//       password: Joi.string().min(4).max(30).required(),
//       // role: Joi.string().valid('Admin', 'User').required(),
//       phoneNumber: Joi.string().min(10).max(13).required(),
//       isActive: Joi.boolean(),
//     }),
//   },
//   order: {
//     add: Joi.object<any>({
//       items: Joi.array().required(),
//       user_id: JoiObjectId.objectId().required(),
//       tag: Joi.string().required(),
//       total_price: Joi.number().required(),
//       // order_status: Joi.string().valid("Pending", "Completed").required(),
//       // payment_status: Joi.string().valid("Paid", "Not Paid").required(),
//       // taken: Joi.string().valid("Taken", "Not Taken").required(),
//       order_date: Joi.date().required(),
//       expected_completion_date: Joi.date().required(),
//       operator_id: JoiObjectId.objectId().required,
//     }),
//   },
//   invoice: {
//     add: Joi.object<any>({
//       order_id: JoiObjectId.objectId().required(),
//       payment_method: Joi.string().required(),
//     }),
//   },
// };
