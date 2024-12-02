import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  nameCat: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Category', categorySchema);
