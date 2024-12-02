import mongoose from 'mongoose';

const tipificationSchema = new mongoose.Schema({
  categorytip: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Tipification', tipificationSchema);