import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePackage } from "../hooks/usePackage";
const UpdatePackage = () => {
	const { id: packageId } = useParams();
	const { updatePackage, getPackage, loading } = usePackage();
	const [currentDate, setCurrentDate] = useState([]);
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		price: "",
		duration: "",
		availableDates: [],
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		updatePackage(packageId, { ...formData });
	};
	const handleDateAdd = () => {
		if (currentDate) {
			setFormData((prevData) => ({
				...prevData,
				availableDates: [...prevData.availableDates, currentDate],
			}));
			setCurrentDate("");
		}
	};

	const handleDateRemove = (index) => {
		setFormData((prevData) => ({
			...prevData,
			availableDates: prevData.availableDates.filter(
				(_, i) => i !== index
			),
		}));
	};
	useEffect(() => {
		async function getPackageData(packageId) {
			const data = await getPackage(packageId);
			setFormData(data);
		}
		getPackageData(packageId);
	}, [packageId]);
	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center">
			<div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
				<h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
					Update Travel Package
				</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label
							htmlFor="title"
							className="block text-sm font-medium text-gray-700"
						>
							Title
						</label>
						<input
							type="text"
							id="title"
							name="title"
							value={formData?.title}
							onChange={handleChange}
							required
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter package title"
						/>
					</div>
					<div>
						<label
							htmlFor="description"
							className="block text-sm font-medium text-gray-700"
						>
							Description
						</label>
						<textarea
							id="description"
							name="description"
							value={formData?.description}
							onChange={handleChange}
							required
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter package description"
						/>
					</div>
					<div>
						<label
							htmlFor="price"
							className="block text-sm font-medium text-gray-700"
						>
							Price
						</label>
						<input
							type="number"
							id="price"
							name="price"
							value={formData?.price}
							onChange={handleChange}
							required
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter price"
						/>
					</div>
					<div>
						<label
							htmlFor="availableDates"
							className="block text-sm font-medium text-gray-700"
						>
							Available Dates
						</label>
						<div className="flex items-center space-x-2">
							<input
								type="date"
								id="availableDates"
								value={currentDate}
								onChange={(e) => setCurrentDate(e.target.value)}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
							/>
							<button
								type="button"
								onClick={handleDateAdd}
								className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
							>
								Add Date
							</button>
						</div>
						{formData?.availableDates?.length > 0 && (
							<ul className="mt-4 list-disc list-inside space-y-1">
								{formData.availableDates.map((date, index) => (
									<li
										key={index}
										className="flex items-center justify-between"
									>
										<span>
											{new Date(
												date
											).toLocaleDateString()}
										</span>
										<button
											type="button"
											onClick={() =>
												handleDateRemove(index)
											}
											className="text-red-500 hover:underline"
										>
											Remove
										</button>
									</li>
								))}
							</ul>
						)}
					</div>

					{/* Image URL */}
					{/* <div>
						<label
							htmlFor="imageURL"
							className="block text-sm font-medium text-gray-700"
						>
							Image URL
						</label>
						<input
							type="url"
							id="imageURL"
							name="imageURL"
							value={formData.imageURL}
							onChange={handleChange}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter image URL"
						/>
					</div> */}
					<div className="text-center">
						<button
							type="submit"
							className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
						>
							Update Package
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdatePackage;
