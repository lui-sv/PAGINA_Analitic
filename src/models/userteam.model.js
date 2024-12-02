import mongoose from 'mongoose';

const userTeamSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
}, { timestamps: true });

export default mongoose.model('UserTeam', userTeamSchema);

