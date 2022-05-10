import yup from "yup";

const validateSchedule = async (request, response, next) => {
    try {
        await linkSchema.validate(request.body);
        return next();
    } catch (error) {
        return response.status(400).json({ message: error.message });
    }
};

const linkSchema = yup.object({
    schedulingDate: yup.date().required(),
    schedulingTime: yup.date().required(),
    status: yup.mixed().oneOf(["yes", "no"]),
});

export default validateSchedule;
