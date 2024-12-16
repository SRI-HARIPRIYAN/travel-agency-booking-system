import React from "react";

import { usePackage } from "../../hooks/usePackage";
import PackageCard from "../../components/PackageCard";
const PackagesScreen = () => {
	const { packages } = usePackage();
	console.log(packages);
	return (
		<div className="bg-gray-100 min-h-screen py-8">
			<div className="container mx-auto px-4">
				<h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
					Travel Packages
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{packages.map((pkg, index) => (
						<PackageCard key={index} pkg={pkg} />
					))}
				</div>
			</div>
		</div>
	);
};

export default PackagesScreen;
