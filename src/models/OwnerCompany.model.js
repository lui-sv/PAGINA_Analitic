import mongoose from 'mongoose';

const ownerCompanySchema = new mongoose.Schema({
  ownerDNI: { type: String, required: true, unique: true },
  companyName: { type: String, required: true },
  businessName: { type: String, required: true }, 
  companyPhone: { type: String, required: true }, 
  companyAddress: { type: String, required: true },
  companyIGV: { type: Number },
}, { timestamps: true });

export default mongoose.model('Ownercompany', ownerCompanySchema);
