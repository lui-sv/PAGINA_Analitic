import mongoose from 'mongoose';

const baseGeneralSchema = new mongoose.Schema({
  ruc: { type: String, required: true, unique: true },
  razonSocial: { type: String, required: true },
  direccion: { type: String },
  movistarLines: { type: Number, default: 0 },
  claroLines: { type: Number, default: 0 },
  entelLines: { type: Number, default: 0 },
  otherLines: { type: Number, default: 0 },
  uncountedLines: { type: Number, default: 0 },
  competenceLines: { type: Number, default: 0 },  // Nuevo campo
  totalLines: { type: Number, default: 0 },

}, { timestamps: true });

export default mongoose.model('BaseGeneral', baseGeneralSchema);
