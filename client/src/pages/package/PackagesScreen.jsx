import React from "react";

import { usePackage } from "../../hooks/usePackage";
import PackageCard from "../../components/PackageCard";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
const PackagesScreen = () => {
	const { packages } = usePackage();
	const { user } = useAuth();
	console.log(packages);
	return (
		<>
			<Header />
			<div className="bg-gray-100 min-h-screen py-8">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl font-mono font-bold text-pink-500 mb-6 text-center">
						Our Travel Packages
					</h1>
					{user?.isAdmin && (
						<Link
							className="bg-green-500 text-white p-2 block w-fit ml-auto my-4 hover:bg-green-600 transition rounded-md"
							to="/newpackage"
						>
							New Package
						</Link>
					)}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
						{packages.map((pkg, index) => (
							<PackageCard key={index} pkg={pkg} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default PackagesScreen;
