import mongoose from 'mongoose';

const sourceSchema = new mongoose.Schema({
  namesource: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Source', sourceSchema);
