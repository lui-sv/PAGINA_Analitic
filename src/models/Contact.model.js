import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    
    contactDescription: { 
      type: String, 
      required: true // Descripción obligatoria del contacto
    },
    referenceName: { 
      type: String, 
      default: "SIN INFORMACION" // Valor predeterminado en español
    },
    position: { 
      type: String, 
      default: "SIN INFORMACION" // Valor predeterminado en español
    },
    contactType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "typecontact", // Referencia al modelo `typecontact`
      required: true, // Referencia obligatoria al tipo de contacto
    },
    ruc: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BaseGeneral",
      required: true, // RUC obligatorio
    },
    source: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Source",
      default: new mongoose.Types.ObjectId("66ba87e530a50d9cea2713fd"), // Fuente predeterminada
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
