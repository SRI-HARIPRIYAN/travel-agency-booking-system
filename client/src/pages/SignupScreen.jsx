import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth.jsx";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";
const SignupScreen = () => {
	const { signup, loading } = useAuth();
	const [formData, setFormData] = useState({
		userName: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		signup(formData);
	};
	if (loading) {
		return <Spinner />;
	}
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
				<h2 className="text-2xl font-bold text-center text-gray-700">
					Sign Up
				</h2>
				<form onSubmit={handleSubmit} className="mt-4">
					<div className="mb-4">
						<label
							htmlFor="userName"
							className="block text-sm font-medium text-gray-600"
						>
							Username
						</label>
						<input
							type="text"
							id="userName"
							name="userName"
							value={formData.userName}
							onChange={handleChange}
							required
							className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your username"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-600"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your email"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-600"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							required
							className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter your password"
						/>
					</div>
					<button
						onClick={(e) => handleSubmit(e)}
						type="submit"
						className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Sign Up
					</button>
				</form>
				<div className="text-center">
					Already a user?{" "}
					<span>
						<Link
							className=" text-pink-500 font-semibold cursor-pointer"
							to="/login"
						>
							Login
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default SignupScreen;
