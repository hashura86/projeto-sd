import ScheduleRouter from "./src/router/ScheduleRouter.js";
import prisma from "@prisma/client";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";

dotenv.config();

const { PORT, DATABASE_URL } = process.env;

const prismaClient = new prisma.PrismaClient();

(async () => {
    try {
        await prismaClient.user.create({
            data: {
                name: "Giordano",
                email: "hashura@outlook.com",
                password: "joao123",
            },
        });
    } catch (error) {
        console.log(error);
    }
})();

mongoose
    .connect(DATABASE_URL)
    .then(() => {
        console.log("Database connected!");
    })
    .catch((error) => {
        console.error(error.message);
    });

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(ScheduleRouter);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
