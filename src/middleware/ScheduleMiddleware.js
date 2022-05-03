import yup from "yup"

const validateSchedule = async (request, response, next) => {
    try {
        await linkSchema.validate(request.body);
        return next();
    } catch (error) {
        return response.status(400).json({ message: error.message });
    }
}

const linkSchema = yup.object({
    name: yup.string().required().min(3),
    email: yup.string().email("Invalid email ! Please, try again ...").required("No email provided"),
    password: yup.string().required().min(8),
    birthDate: yup.date().required(),
})

export default validateSchedule