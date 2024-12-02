import mongoose from "mongoose";

const tipificationAssignmentSchema = new mongoose.Schema(
  {
    ruc: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BaseGeneral",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    dateassignament: { type: Date, default: Date.now },
    tipificacion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subtipification",
      default: '66ad570e53d5bd3e89d33d92',
    },
    observation: {
      type: String,
      default: 'SIN OBSERVACIONES', // Valor predeterminado
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "TipificationAssignment",
  tipificationAssignmentSchema
);

