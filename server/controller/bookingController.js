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
		res.status(201).json(newBooking);
	} catch (error) {
		return res.status(500).json({ error: "Internal server error" });
	}
};
export { createBooking };
