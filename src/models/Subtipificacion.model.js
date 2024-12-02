import mongoose from 'mongoose';

const subtipificationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
     
      required: true,
    },
    tipificationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tipification",
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model('Subtipification', subtipificationSchema);

