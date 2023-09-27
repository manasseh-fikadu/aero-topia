import mongoose, { Schema } from 'mongoose'
import IUserInterface from './interface'


enum roleType {
    AD = 'Admin',
    US = 'User'
}

const userSchema: Schema = new Schema(
    {
        full_name: { type: String, required: true },
        email:{ type: String, required: true, unique: true, index: true },
        password:  { type: String, required: true},
        role: { type: String, enum: roleType, default: 'User', required: true },
        position: { type: String, required: true },
        profilePhoto: { type: String, required: false },
        isActive:  { type: Boolean, default: true },
    },

    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }

)

userSchema.set('toJSON', { virtuals: true })

export default mongoose.model<IUserInterface>('User', userSchema)
