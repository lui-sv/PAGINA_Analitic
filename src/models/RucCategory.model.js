import mongoose from 'mongoose';

const rucCategorySchema = new mongoose.Schema({
  rucId: { type: mongoose.Schema.Types.ObjectId, ref: 'BaseGeneral', required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
}, { timestamps: true });

export default mongoose.model('RucCategory', rucCategorySchema);
