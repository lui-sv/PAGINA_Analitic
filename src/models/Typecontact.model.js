import mongoose from "mongoose";

const typecontactSchema = new mongoose.Schema({
  nametypecontact: {
    type: String,
    required: true,
  },
});

export default mongoose.model("typecontact", typecontactSchema);
