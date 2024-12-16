import express from "express";
import { createBooking, getBookings } from "../controller/bookingController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();
router.route("/").post(createBooking).get(protect, isAdmin, getBookings);
export default router;
