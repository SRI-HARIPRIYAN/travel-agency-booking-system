import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { usePackage } from "../hooks/usePackage";
const PackageCard = ({
	pkg,
	/* title,
	description,
	price,
	availableDates,
	imageURL, */
}) => {
	const { user } = useAuth();
	const { deletePackage } = usePackage();
	const handleDelete = () => {
		deletePackage(pkg._id);
	};
	const navigate = useNavigate();
	return (
		<div className="max-w-sm bg-white rounded-lg hover:bg-gray-100 shadow-md overflow-hidden">
			<img
				className="w-full h-48 object-cover"
				src={pkg.image}
				alt={`${pkg.title} Image`}
			/>
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

				{user?.isAdmin ? (
					<div className="flex items-center justify-center gap-5">
						<Link
							to={`/packages/update/${pkg._id}`}
							className="mt-4 w-fit bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
						>
							Update
						</Link>
						<button
							onClick={handleDelete}
							className="mt-4 w-fit bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
						>
							Delete
						</button>
					</div>
				) : (
					<Link
						to={`/packages/${pkg._id}/book`}
						className="mt-4 w-full block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
					>
						Book Now
					</Link>
				)}
			</div>
		</div>
	);
};
export default PackageCard;
