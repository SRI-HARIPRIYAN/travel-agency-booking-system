import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePackage } from "../hooks/usePackage";
import BookingForm from "../components/BookingForm";
import Header from "../components/Header";
const BookingScreen = () => {
	const { id: packageId } = useParams();
	const [packageData, setPackageData] = useState({});
	const { getPackage } = usePackage();
	useEffect(() => {
		async function getPackageData(packageId) {
			const res = await getPackage(packageId);
			setPackageData(res);
		}
		getPackageData(packageId);
	}, [packageId]);
	return (
		<>
			<Header />
			<div className="w-full flex flex-col justify-center bg-gradient-to-r from-blue-50 to-blue-200">
				<div className="w-[90%] max-w-[400px] bg-white rounded-lg mt-4 mx-auto hover:bg-gray-100 shadow-md overflow-hidden">
					{/* <img
                    className="w-full h-48 object-cover"
                    src={imageURL}
                    alt={`${packageData.title} Image`}
                /> */}
					<div className="p-4">
						<h2 className="text-xl font-bold text-gray-800 mb-2">
							{packageData.title}
						</h2>
						<p className="text-gray-600 text-sm mb-4">
							{packageData.description}
						</p>
						<div className="text-gray-800 font-semibold mb-2">
							Price: ${packageData.price}
						</div>
						<div className="text-gray-700 text-sm">
							<span className="font-medium">
								Available Dates:
							</span>
							{packageData?.availableDates?.length > 0 ? (
								<ul className="list-disc list-inside ml-2 mt-2">
									{packageData?.availableDates?.map(
										(date, index) => (
											<li key={index}>
												{new Date(
													date
												).toLocaleDateString()}
											</li>
										)
									)}
								</ul>
							) : (
								<p className="text-red-500">
									No dates available
								</p>
							)}
						</div>
					</div>
				</div>
				<BookingForm selectedPackage={packageId} />
			</div>
		</>
	);
};

export default BookingScreen;
