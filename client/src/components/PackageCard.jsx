import { useNavigate } from "react-router-dom";

const PackageCard = ({
	pkg,
	/* title,
	description,
	price,
	availableDates,
	imageURL, */
}) => {
	console.log(pkg);
	const navigate = useNavigate();
	return (
		<div
			onClick={() => navigate(`/packages/${pkg._id}`)}
			className="max-w-sm bg-white rounded-lg hover:bg-gray-100 shadow-md overflow-hidden"
		>
			{/* <img
				className="w-full h-48 object-cover"
				src={imageURL}
				alt={`${pkg.title} Image`}
			/> */}
			<div className="p-4">
				<h2 className="text-xl font-bold text-gray-800 mb-2">
					{pkg.title}
				</h2>
				<p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
				<div className="text-gray-800 font-semibold mb-2">
					Price: ${pkg.price}
				</div>
				<div className="text-gray-700 text-sm">
					<span className="font-medium">Available Dates:</span>
					{pkg?.availableDates.length > 0 ? (
						<ul className="list-disc list-inside ml-2 mt-2">
							{pkg?.availableDates?.map((date, index) => (
								<li key={index}>
									{new Date(date).toLocaleDateString()}
								</li>
							))}
						</ul>
					) : (
						<p className="text-red-500">No dates available</p>
					)}
				</div>
				<button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
					Book Now
				</button>
			</div>
		</div>
	);
};
export default PackageCard;
