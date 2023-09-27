import { Document } from 'mongoose'


interface IPartnerInterface extends Document {
    logo: String
    link: String
    isActive: Boolean
}

export default IPartnerInterface