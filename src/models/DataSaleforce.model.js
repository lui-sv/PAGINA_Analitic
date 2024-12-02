import mongoose from 'mongoose';

const dataSaleforceSchema = new mongoose.Schema({
  ruc: { type: mongoose.Schema.Types.ObjectId, ref: 'BaseGeneral', required: true },
  type: { type: String, required: true },
  segment: { type: String, required: true },
  primaryConsultant: { type: String, required: true },
  lastAssignmentDate: { type: Date },
  nextDeassignmentDate: { type: Date},
}, { timestamps: true });

export default mongoose.model('DataSaleforce', dataSaleforceSchema);
