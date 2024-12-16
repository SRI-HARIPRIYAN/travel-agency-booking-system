import { useContext, createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
	const [booking, setBooking] = useState({});
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const bookPackage = async (bookingData) => {
		try {
			setLoading(true);
			const response = await fetch("/api/bookings", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(bookingData),
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || data.error);
			}
			setBooking(data);
			toast.success("Package Booked Successfully");
			navigate("/bookings/invoice");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	const getBookings = async () => {
		try {
			setLoading(true);
			const response = await fetch("/api/bookings", {
				method: "GET",
				credentials: "include",
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || data.error);
			}
			return data;
		} catch (error) {
			toast.error(error);
		} finally {
			setLoading(false);
		}
	};

	const bookingValue = {
		bookPackage,
		loading,
		booking,
		getBookings,
	};
	return (
		<BookingContext.Provider value={bookingValue}>
			{children}
		</BookingContext.Provider>
	);
};

export const useBooking = () => {
	return useContext(BookingContext);
};
