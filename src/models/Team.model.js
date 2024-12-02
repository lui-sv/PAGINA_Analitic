import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    nameTeam: { type: String, required: true },

    supervisor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Team", teamSchema);

