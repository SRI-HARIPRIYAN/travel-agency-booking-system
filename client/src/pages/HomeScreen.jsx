import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
const HomeScreen = () => {
	return (
		<div className="flex flex-col justify-between min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
			<Header />
			<main className="bg-gray-50 text-gray-800 ">
				<section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 lg:py-24">
					<div className="container mx-auto text-center px-6">
						<h1 className="text-4xl md:text-5xl font-extrabold text-pink-600">
							Explore the World with{" Us"}
						</h1>
						<p className="mt-4 text-lg md:text-xl text-gray-700">
							Your gateway to unforgettable experiences.
						</p>
						<Link
							to="/packages"
							className="mt-6 px-6 py-3 block w-fit mx-auto bg-green-400 text-white text-lg rounded-lg shadow-md hover:bg-green-600 transition"
						>
							Start Your Journey
						</Link>
					</div>
				</section>
			</main>
			<footer className="bg-gray-100 py-6">
				<div className="container mx-auto text-center">
					<p className="text-gray-600 text-sm">
						&copy;2024 All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default HomeScreen;
