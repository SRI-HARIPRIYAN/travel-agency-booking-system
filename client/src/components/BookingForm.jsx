import React, { useState } from "react";
import { useBooking } from "../hooks/useBooking";
const BookingForm = ({ selectedPackage }) => {
	const { bookPackage } = useBooking();
	const [formData, setFormData] = useState({
		userName: "",
		email: "",
		phoneNumber: "",
		no_of_travellers: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ ...formData, selectedPackage });
		bookPackage({ ...formData, selectedPackage });
	};

	return (
		<div className="flex justify-center items-center min-h-screen  p-4 ">
			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
			>
				<h2 className="text-2xl font-bold text-gray-800 pb-4 text-center">
					Book Your Package
				</h2>

				{/* User Name */}
				<div className="pb-4">
					<label
						className="block text-gray-700 font-semibold pb-2"
						htmlFor="userName"
					>
						Name
					</label>
					<input
						type="text"
						id="userName"
						name="userName"
						value={formData.userName}
						onChange={handleChange}
						placeholder="Enter your full name"
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
						required
					/>
				</div>

				{/* Email */}
				<div className="pb-4">
					<label
						className="block text-gray-700 font-semibold pb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Enter your email"
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
						required
					/>
				</div>

				{/* Phone Number */}
				<div className="pb-4">
					<label
						className="block text-gray-700 font-semibold pb-2"
						htmlFor="phoneNumber"
					>
						Phone Number
					</label>
					<input
						type="number"
						id="phoneNumber"
						name="phoneNumber"
						value={formData.phoneNumber}
						onChange={handleChange}
						placeholder="Enter your phone number"
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
						required
					/>
				</div>

				{/* Number of Travellers */}
				<div className="pb-4">
					<label
						className="block text-gray-700 font-semibold pb-2"
						htmlFor="no_of_travellers"
					>
						Number of Travellers
					</label>
					<input
						type="number"
						id="no_of_travellers"
						name="no_of_travellers"
						value={formData.no_of_travellers}
						onChange={handleChange}
						placeholder="Enter number of travellers"
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
						required
					/>
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg"
				>
					Confirm Booking
				</button>
			</form>
		</div>
	);
};

export default BookingForm;
