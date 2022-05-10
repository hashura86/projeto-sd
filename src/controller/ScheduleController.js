import ScheduleModel from "../model/ScheduleModel.js";
class ScheduleController {
    async getOne(request, response) {
        const { id } = request.params;

        try {
            const schedule = await ScheduleModel.findById(id);

            if (schedule) {
                return response.json(schedule);
            }
            response.json({ message: "Schedule not found!" });
        } catch (error) {
            response.status(400).json({ message: "Unexpected error!" });
        }
    }

    async index(request, response) {
        const schedule = await ScheduleModel.find();
        response.json({ items: schedule });
    }

    async store(request, response) {
        const { schedulingDate, schedulingTime, wasAttended } = request.body;

        try {
            const schedule = await ScheduleModel.create({
                schedulingDate,
                schedulingTime,
                wasAttended,
            });
            response.json({ message: "Schedule created!", schedule });
        } catch (error) {
            response.status(400).json({ message: error.message });
        }
    }

    async update(request, response) {
        const { id } = request.params;
        const { schedulingDate, schedulingTime, wasAttended } = request.body;

        try {
            const schedule = await ScheduleModel.findByIdAndUpdate(
                id,
                {
                    schedulingDate,
                    schedulingTime,
                    wasAttended,
                },
                {
                    new: true,
                }
            );

            return response.json({ message: "Schedule updated!", schedule });
        } catch (error) {
            response.status(400).json({ message: error.message });
        }
    }

    async remove(request, response) {
        const { id } = request.params;

        const schedule = await ScheduleModel.findById(id);

        if (schedule) {
            await schedule.remove();
            return response.json({ message: "Schedule deleted!" });
        }
        response.status(404).json({ message: "Schedule not found!" });
    }
}

export default ScheduleController;
