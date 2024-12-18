import React, { useState } from "react";
import { usePackage } from "../../hooks/usePackage";
import Spinner from "../../components/Spinner";

const CreatePackageScreen = () => {
	const { createPackage, loading } = usePackage();
	const [imageData, setImageData] = useState("");
	const [imageName, setImageName] = useState("");
	const [currentDate, setCurrentDate] = useState("");
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		price: "",
		availableDates: [],
		imageURL: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
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

	const handleSubmit = (e) => {
		e.preventDefault();
		createPackage({ ...formData, image: imageData });
		// Add your form submission logic here (e.g., API call)
	};

	const handleFileUpload = async (e) => {
		console.log(e.target);
		const file = e.target.files[0];
		const base64 = await convertToBase64(file);
		console.log(base64);
		setImageName(file.name);
		setImageData(base64);
	};

	if (loading) {
		return <Spinner />;
	}

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center">
			<div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
				<h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
					Create a New Travel Package
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
							value={formData.title}
							onChange={handleChange}
							required
							className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
							value={formData.description}
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
							value={formData.price}
							onChange={handleChange}
							required
							className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
						<div className="flex items-center space-x-2 justify-between md:justify-start">
							<input
								type="date"
								id="availableDates"
								value={currentDate}
								onChange={(e) => setCurrentDate(e.target.value)}
								className="mt-1 block w-1/4 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
							/>
							<button
								type="button"
								onClick={handleDateAdd}
								className="px-4  py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
							>
								Add Date
							</button>
						</div>
						{formData.availableDates.length > 0 && (
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

					<div>
						<label
							htmlFor="imageURL"
							className="block text-sm font-medium text-gray-700"
						>
							Image
						</label>
						<input
							type="file"
							id="file"
							name="file"
							value={formData.imageURL}
							accept=".jpg, .png, .jpeg"
							onChange={(e) => handleFileUpload(e)}
							required
							className="mt-1 block w-full border-gray-300 shadow-sm "
							placeholder="Enter image URL"
						/>
						{imageName && (
							<span className="text-sm text-gray-500">
								{imageName}
							</span>
						)}
					</div>

					<div className="text-center">
						<button
							onClick={handleSubmit}
							type="submit"
							className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
						>
							Create Package
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreatePackageScreen;

function convertToBase64(file) {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = () => {
			resolve(fileReader.result);
		};
		fileReader.onerror = (error) => {
			reject(error);
		};
	});
}
