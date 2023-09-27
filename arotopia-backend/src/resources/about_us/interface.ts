import { Document } from 'mongoose'


interface IAboutUsInterface extends Document {
    about_us: String
    phone_number: String
    lindkin: String
    facebook: String
    email: String
    logo: String
    moto: String
}

export default IAboutUsInterface