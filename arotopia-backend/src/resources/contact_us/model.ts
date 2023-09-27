import mongoose, { Schema } from 'mongoose'
import IContactUsInterface from './interface'



const contact_usSchema: Schema = new Schema(
    {
        
        name: { type: String, default: 'Unknown'},
        email: { type: String, default: 'Unknown'},
        phone_number: { type: String, default: 'Unknown'},
        message: { type: String, required: true },
        sent: { type: Boolean, require: true, default: false},
    },

    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }

)


contact_usSchema.set('toJSON', { virtuals: true })

export default mongoose.model<IContactUsInterface>('Contact_us',contact_usSchema)
