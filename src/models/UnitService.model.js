import mongoose from 'mongoose';

const unitServiceSchema = new mongoose.Schema({
  phoneNumber: { type: String, unique: true },
  equipmentType: { type: String },
  contractDate: { type: Date },
  statusDate: { type: Date },
  plan: { type: String },
  status: { type: String },
  lastDate: { type: Date },
  ruc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BaseGeneral",
  },
}, { timestamps: true });

export default mongoose.model('UnitService', unitServiceSchema);
