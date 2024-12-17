import React, { useEffect, useState } from "react";
import { useBooking } from "../hooks/useBooking";
import Spinner from "./Spinner";

const Bookings = () => {
	const { getBookings, loading } = useBooking();
	const [bookings, setBookings] = useState([]);
	console.log(bookings);
	useEffect(() => {
		async function getData() {
			const data = await getBookings();
			setBookings(data);
		}
		getData();
	}, []);
	if (loading) {
		return <Spinner />;
	}
	return (
		<div className="min-h-screen bg-gray-100 p-4">
			<div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
				<h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
					Bookings So Far
				</h1>
				<div className="overflow-x-auto">
					<table className="w-full table-auto border-collapse border border-gray-300">
						<thead>
							<tr className="bg-gray-800 text-white">
								<th className="border border-gray-300 px-4 py-2 text-left">
									User Name
								</th>
								<th className="border text-left  px-4 py-2  border-gray-300">
									Email
								</th>
								<th className="border text-left  px-4 py-2  border-gray-300">
									Phone Number
								</th>
								<th className="border  px-4 py-2 text-left border-gray-300">
									No. of Travellers
								</th>
								<th className="border border-gray-300 px-4 py-2 text-left">
									Package Name
								</th>
								<th className="border border-gray-300 px-4 py-2 text-left">
									Price
								</th>
							</tr>
						</thead>
						<tbody>
							{bookings?.map((booking) => (
								<tr
									key={booking._id}
									className="hover:bg-gray-100"
								>
									<td className="border border-gray-300 px-4 py-2">
										{booking.userName}
									</td>
									<td className="border px-4 py-2 border-gray-300 ">
										{booking.email}
									</td>
									<td className="border border-gray-300 px-4 py-2">
										{booking.phoneNumber}
									</td>
									<td className="border  px-4 py-2 border-gray-300">
										{booking.no_of_travellers}
									</td>
									<td className="border border-gray-300 px-4 py-2">
										{booking.selectedPackage?.title}
									</td>
									<td className="border border-gray-300 px-4 py-2">
										{"$" + booking?.selectedPackage?.price}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				{bookings>.length === 0 && (
					<div className="text-center text-gray-500 mt-4">
						No bookings found.
					</div>
				)}
			</div>
		</div>
	);
};

export default Bookings;
