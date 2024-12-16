import React from "react";
import Spinner from "../../components/Spinner";
import { usePackage } from "../../hooks/usePackage";
import { useAuth } from "../../hooks/useAuth";
import Bookings from "../../components/Bookings";
import Header from "../../components/Header";
const AdminDashboard = () => {
	const { user } = useAuth();
	const { packages, loading } = usePackage();
	if (loading) {
		return <Spinner />;
	}
	return (
		<>
			<Header />
			<div className="min-h-screen bg-gray-50 p-6">
				<div className="bg-white shadow rounded-lg p-6 mb-6">
					<h2 className="text-2xl font-bold text-gray-800 mb-4">
						Admin Profile
					</h2>
					{user ? (
						<div>
							<p className="text-gray-700 text-lg">
								<span className="font-semibold">Name:</span>
								{user.userName}
							</p>
							<p className="text-gray-700 text-lg">
								<span className="font-semibold">Email:</span>
								{user.email}
							</p>
						</div>
					) : (
						<p className="text-red-500">
							Failed to load profile data
						</p>
					)}
				</div>

				<div className="bg-white shadow rounded-lg p-6">
					<h2 className="text-2xl font-bold text-gray-800 mb-4">
						My Packages
					</h2>
					{packages.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{packages.map((pkg) => (
								<div
									key={pkg._id}
									className="border rounded-lg shadow-sm p-4 hover:shadow-md transition"
								>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										{pkg.title}
									</h3>
									<p className="text-gray-600 text-sm mb-2">
										{pkg.description}
									</p>
									<p className="text-gray-700 font-medium mb-2">
										Price: ${pkg.price}
									</p>
									<div className="text-gray-600 text-sm">
										<span className="font-medium">
											Available Dates:
										</span>
										{pkg.availableDates.length > 0 ? (
											<ul className="list-disc list-inside ml-2">
												{pkg.availableDates.map(
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
											<span className="text-red-500">
												{" "}
												No dates available
											</span>
										)}
									</div>
								</div>
							))}
						</div>
					) : (
						<p className="text-gray-700">No packages found.</p>
					)}
				</div>

				<Bookings />
			</div>
		</>
	);
};

export default AdminDashboard;
