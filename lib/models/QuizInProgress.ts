import mongoose, { Schema, type InferSchemaType, type Model } from 'mongoose'

const quizInProgressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    categoryId: { type: String, required: true, trim: true, index: true },
    quizId: { type: String, required: true, trim: true, index: true },
    currentQuestion: { type: Number, required: true, min: 0 },
    userAnswers: { type: [Schema.Types.Mixed], required: true },
    endsAt: { type: Number, required: true },
    startedAt: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
)

quizInProgressSchema.index({ userId: 1, categoryId: 1, quizId: 1 }, { unique: true })
quizInProgressSchema.index({ userId: 1, categoryId: 1 })

export type QuizInProgressDocument = InferSchemaType<typeof quizInProgressSchema> & {
  _id: mongoose.Types.ObjectId
}

type QuizInProgressModel = Model<QuizInProgressDocument>

export const QuizInProgress: QuizInProgressModel =
  (mongoose.models.QuizInProgress as QuizInProgressModel) ||
  mongoose.model<QuizInProgressDocument>('QuizInProgress', quizInProgressSchema)
