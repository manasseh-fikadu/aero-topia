import { Document } from 'mongoose'


interface IContactUsInterface extends Document {
  name: String
  email: String
  phone_number: String
  message: String
  sent: Boolean
}

export default IContactUsInterface