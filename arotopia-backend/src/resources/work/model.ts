import mongoose, { Schema } from 'mongoose'
import IWorkInterface from './interface'



const WorkSchema: Schema = new Schema(
    {
        media: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, require: true, default: "some description"},
        tag: [{type: String}],
        isActive: { type: Boolean, require: true, default: true },

    },

    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }

)


WorkSchema.set('toJSON', { virtuals: true })

export default mongoose.model<IWorkInterface>('Work',WorkSchema)
