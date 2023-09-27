import { Document } from 'mongoose'


interface IServiceInterface extends Document {
    media: String
    title: String
    description: String
    isActive: Boolean
}

export default IServiceInterface