import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema(
    {
        schedulingDate: { type: Date, required: true },
        schedulingTime: { type: Date, required: true },
        wasAttended: { type: String, enum: ["yes", "no"], default: "no" },
    },
    {
        timestamps: true,
    }
);

const ScheduleModel = mongoose.model("scheduling", ScheduleSchema);

export default ScheduleModel;
