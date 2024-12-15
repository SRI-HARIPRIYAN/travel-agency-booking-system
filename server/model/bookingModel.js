import mongoose from "mongoose";

const bookingModel = mongoose.Schema({
	userName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: true,
	},
	no_of_travellers: {
		type: Number,
		required: true,
	},
	selectedPackage: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Package",
	},
});

const Booking = mongoose.model("Booking", bookingModel);

export default Booking;
