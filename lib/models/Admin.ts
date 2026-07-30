import mongoose, { Schema, type InferSchemaType, type Model } from 'mongoose'

const adminSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true, maxlength: 80 },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 120,
    },
    password: { type: String, required: true, select: false },
  },
  { timestamps: true },
)

export type AdminDocument = InferSchemaType<typeof adminSchema> & {
  _id: mongoose.Types.ObjectId
}

type AdminModel = Model<AdminDocument>

export const Admin: AdminModel =
  (mongoose.models.Admin as AdminModel) ||
  mongoose.model<AdminDocument>('Admin', adminSchema)
