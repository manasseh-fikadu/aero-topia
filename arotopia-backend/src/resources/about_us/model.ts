import mongoose, { Schema } from 'mongoose'
import IAboutUsInterface from './interface'



const about_usSchema: Schema = new Schema(
    {
        about_us: { type: String, required: true },
        phone_number:{ type: String, required: true },
        lindkin: {type: String},
        facebook: {type: String},
        email: { type: String, required: true },
        logo: { type: String, default: "https://media.licdn.com/dms/image/D4E03AQHHaH23VZZPWg/profile-displayphoto-shrink_800_800/0/1675945849881?e=1691020800&v=beta&t=yqXNZBZ8AdB3BH0lfAAueEthEmjza8fDZxhbQuESv6E", required: true },
        moto:{ type: String, required: true },
    },

    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }

)


about_usSchema.set('toJSON', { virtuals: true })

export default mongoose.model<IAboutUsInterface>('About_us',about_usSchema)
