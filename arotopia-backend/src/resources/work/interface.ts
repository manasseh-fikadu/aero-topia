import { Document } from 'mongoose'


interface IWorkInterface extends Document {
    media: String
    title: String
    description: String
    tag: String
    isActive: Boolean
}

export default IWorkInterface