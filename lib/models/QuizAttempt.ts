import mongoose, { Schema, type InferSchemaType, type Model } from 'mongoose'

const quizAttemptSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    categoryId: { type: String, required: true, trim: true, index: true },
    quizId: { type: String, required: true, trim: true, index: true },
    quizTitle: { type: String, required: true, trim: true },
    score: { type: Number, required: true, min: 0, max: 100 },
    totalQuestions: { type: Number, required: true, min: 0 },
    correctAnswers: { type: Number, required: true, min: 0 },
    studyTime: { type: Number, min: 0 },
    completedAt: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true,
  },
)

quizAttemptSchema.index({ userId: 1, categoryId: 1, quizId: 1 }, { unique: true })
quizAttemptSchema.index({ quizId: 1, score: -1, completedAt: 1 })

export type QuizAttemptDocument = InferSchemaType<typeof quizAttemptSchema> & {
  _id: mongoose.Types.ObjectId
}

type QuizAttemptModel = Model<QuizAttemptDocument>

export const QuizAttempt: QuizAttemptModel =
  (mongoose.models.QuizAttempt as QuizAttemptModel) ||
  mongoose.model<QuizAttemptDocument>('QuizAttempt', quizAttemptSchema)
