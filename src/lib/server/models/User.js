import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema(
  {
    interviewee: { type: String, required: true, trim: true },
    interviewTitle: { type: String, trim: true }, // optional
    word: { type: String, required: true, trim: true, lowercase: true },
    count: { type: Number, required: true, min: 0 },
    category: { type: String, trim: true }, // optional (e.g., “work”, “stress”, “people”)
    date: { type: Date } // optional
  },
  { timestamps: true }
);

// Keep the model name as 'User' IF you don't want to rename API routes yet
export default mongoose.models.User || mongoose.model('User', wordSchema);


