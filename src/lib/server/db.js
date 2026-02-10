import mongoose from 'mongoose';
import { env } from '$env/dynamic/private';

export async function connectToDatabase() {
  if (!env.MONGODB_URI) {
    throw new Error('Missing MONGODB_URI');
  }

  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(env.MONGODB_URI);
}
