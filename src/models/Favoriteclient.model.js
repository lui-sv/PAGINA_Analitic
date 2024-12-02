import mongoose from "mongoose";

const FavoriteclientSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

export default mongoose.model(
  "Favoriteclient",
  FavoriteclientSchema
);