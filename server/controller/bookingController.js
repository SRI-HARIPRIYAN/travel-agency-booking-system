import Booking from "../model/bookingModel.js";
const createBooking = async (req, res) => {
	try {
		const {
			userName,
			email,
			phoneNumber,
			no_of_travellers,
			selectedPackage,
		} = req.body;
		const isBookingExist = await Booking.findOne({
			userName,
			selectedPackage,
		});
		if (isBookingExist) {
			return res.status(400).json({ message: "Already booked" });
		}
		const newBooking = await Booking.create({
			userName,
			email,
			phoneNumber,
			no_of_travellers,
			selectedPackage,
		});
		const bookingDetails = await Booking.findById(newBooking._id).populate(
			"selectedPackage",
			"title description price"
		);
		res.status(201).json(bookingDetails);
	} catch (error) {
		return res.status(500).json({ error: "Internal server error" });
	}
};
const getBookings = async (req, res) => {
	try {
		const bookings = await Booking.find()
			.populate("selectedPackage", "title price")
			.sort({ createdAt: -1 });
		console.log(bookings);
		res.status(201).json(bookings);
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Internal server error", error });
	}
};

export { createBooking, getBookings };
