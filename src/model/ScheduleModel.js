import mongoose from "mongoose"

const ScheduleSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: {type: String, required: true},
        password: { type: String, required: true },
        birthDate: Date,
    },
    {
        timestamps: true
    }
)

const ScheduleModel = mongoose.model("scheduling", ScheduleSchema)

export default ScheduleModel
