import mongoose from "mongoose";

const CycleInfoSchema = new mongoose.Schema({
  phase: { type: String, required: true },
  dayInPhase: { type: Number, required: true },
  totalDaysInPhase: { type: Number, required: true },
  dayOfCycle: { type: Number, required: true },
});

const ProfileSchema = new mongoose.Schema(
  {
    cycleInfo: { type: CycleInfoSchema, required: true },
    mood: String,
    craving: String,
  },
  { timestamps: true }
);

export default mongoose.model("Profile", ProfileSchema);
