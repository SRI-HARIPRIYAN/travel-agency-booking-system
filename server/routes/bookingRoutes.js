import express from "express";
import { createBooking } from "../controller/bookingController.js";
const router = express.Router();

router.route("/bookings").post(createBooking);
