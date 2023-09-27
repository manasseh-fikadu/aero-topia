import { Document } from 'mongoose'


interface IUserInterface extends Document {
    email: String
    password: String
    full_name: String
    role: String
    position: String
    profilePhoto: String
    isActive: Boolean
}

export default IUserInterface