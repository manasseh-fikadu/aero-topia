import mongoose, { Schema } from 'mongoose'
import IPartnersInterface from './interface'



const partnerSchema: Schema = new Schema(
    {
        logo: { type: String},
        link: { type: String,  required: true },
        isActive: { type: Boolean, require: true, default: true},
    },

    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }

)


partnerSchema.set('toJSON', { virtuals: true })

export default mongoose.model<IPartnersInterface>('Partner',partnerSchema)
