import React from "react";
import { useBooking } from "../hooks/useBooking";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
const Invoice = () => {
	const { booking, loading } = useBooking();
	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			<Header />
			{!booking ? (
				<div className="flex justify-center items-center min-h-screen">
					<p className="text-gray-600 text-xl">
						No booking data available.
					</p>
				</div>
			) : (
				<div className="min-h-screen bg-gray-50 flex items-center justify-center">
					<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
						<h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
							Booking Invoice
						</h1>
						<div className="space-y-4">
							<div>
								<h2 className="text-lg font-semibold text-gray-800 mb-2">
									Customer Details
								</h2>
								<p className="text-sm text-gray-600">
									<span className="font-medium">Name:</span>{" "}
									{booking.userName}
								</p>
								<p className="text-sm text-gray-600">
									<span className="font-medium">Email:</span>{" "}
									{booking.email}
								</p>
								<p className="text-sm text-gray-600">
									<span className="font-medium">Phone:</span>{" "}
									{booking.phoneNumber}
								</p>
								<p className="text-sm text-gray-600">
									<span className="font-medium">
										Travellers:
									</span>
									{booking.no_of_travellers}
								</p>
							</div>

							<div>
								<h2 className="text-lg font-semibold text-gray-800 mb-2">
									Package Details
								</h2>
								<p className="text-sm text-gray-600">
									<span className="font-medium">Title:</span>{" "}
									{booking.selectedPackage?.title}
								</p>
								<p className="text-sm text-gray-600">
									<span className="font-medium">
										Description:
									</span>{" "}
									{booking.selectedPackage?.description}
								</p>
								<p className="text-sm text-gray-600">
									<span className="font-medium">Price:</span>{" "}
									${booking.selectedPackage?.price}
								</p>
							</div>

							{/* Total Price */}
							<div className="mt-4">
								<h2 className="text-lg font-semibold text-gray-800">
									Total Cost
								</h2>
								<p className="text-xl font-bold text-gray-900">
									$
									{booking.no_of_travellers *
										(booking.selectedPackage?.price || 0)}
								</p>
							</div>
						</div>

						{/* Footer */}
						<div className="text-center mt-6">
							<p className="text-sm text-gray-500">
								Thank you for booking with us! We hope you enjoy
								your journey.
							</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Invoice;
