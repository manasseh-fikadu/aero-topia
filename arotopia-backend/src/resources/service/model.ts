import mongoose, { Schema } from 'mongoose'
import IServiceInterface from './interface'



const serviceSchema: Schema = new Schema(
    {
        media: { type: String},
        title: { type: String, required: true },
        description: { type: String, require: true, default: ""},
        isActive: { type: Boolean, require: true, default: true },

    },

    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }

)


serviceSchema.set('toJSON', { virtuals: true })

export default mongoose.model<IServiceInterface>('Service',serviceSchema)
