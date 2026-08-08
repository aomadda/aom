import mongoose, { Schema, type InferSchemaType, type Model } from 'mongoose'
import { DEPARTMENTS, PREPARING_POSTS } from '@/lib/validations/auth'

export const USER_STATUSES = ['pending', 'accepted', 'rejected'] as const
export type UserStatus = (typeof USER_STATUSES)[number]

const userSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true, maxlength: 80 },
    designation: { type: String, required: true, trim: true, maxlength: 80 },
    department: { type: String, required: true, enum: DEPARTMENTS },
    preparingPost: { type: String, required: true, enum: PREPARING_POSTS },
    division: { type: String, required: true, trim: true, maxlength: 80 },
    zone: { type: String, required: true, trim: true, maxlength: 80 },
    mobileNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^[6-9]\d{9}$/,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 120,
    },
    password: { type: String, required: true, select: false },
    status: {
      type: String,
      enum: USER_STATUSES,
      default: 'pending',
      required: true,
    },
    lastLoginAt: { type: Date, required: false },
  },
  {
    timestamps: true,
  },
)

export type UserDocument = InferSchemaType<typeof userSchema> & {
  _id: mongoose.Types.ObjectId
}

type UserModel = Model<UserDocument>

export const User: UserModel =
  (mongoose.models.User as UserModel) || mongoose.model<UserDocument>('User', userSchema)
