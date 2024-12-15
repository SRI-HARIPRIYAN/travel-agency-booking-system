import { useContext, createContext, useState } from "react";
import { toast } from "react-toastify";
const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
	const [booking, setBooking] = useState([]);
	const [loading, setLoading] = useState(false);
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
			toast.success(data.message);
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
	};
	return (
		<BookingContext.Provider value={bookingValue}>
			{children}
		</BookingContext.Provider>
	);
};

export default useBooking = () => {
	return useContext(BookingContext);
};
