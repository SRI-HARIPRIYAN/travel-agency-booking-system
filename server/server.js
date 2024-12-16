import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import packageRoutes from "./routes/packageRoutes.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import { connectToDb } from "./utils/connectToDB.js";
dotenv.config();
const app = express();

app.use(
	cors({
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST", "PUT", "DELETE"],
	})
);
connectToDb();
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use("/packages", packageRoutes);
app.use("/admin", adminRoutes);
app.use("/bookings", bookingRoutes);
app.use("/auth", authRoutes);
app.get("/", (req, res) => res.send("Express on Vercel"));

export default app;
