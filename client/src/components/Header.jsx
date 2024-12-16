import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const Header = () => {
	const { logout, loading, user } = useAuth();
	return (
		<header className="bg-blue-600 text-white">
			<div className="container mx-auto flex items-center justify-between py-4 px-6">
				<h1 className="text-2xl text-white font-bold">GoEase</h1>
				<div className="flex items-center space-x-4">
					{user ? (
						<div>
							<p className="text-sm">Welcome, {user.userName}</p>
							<button
								onClick={() => {
									logout();
								}}
								className="text-sm bg-white text-blue-600  px-4 py-1 rounded hover:bg-blue-300 hover:text-white transition"
							>
								Logout
							</button>
						</div>
					) : (
						<Link
							to={"/login"}
							className="text-sm bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100 transition"
						>
							Login
						</Link>
					)}
				</div>
			</div>

			<nav className="bg-blue-700">
				<div className="container mx-auto flex flex-wrap items-center justify-center space-x-6 py-2 px-6 text-sm">
					<a href="/" className="hover:underline">
						Home
					</a>
					<a href="/destinations" className="hover:underline">
						Destinations
					</a>
					<a href="/about" className="hover:underline">
						About Us
					</a>
					<a href="/contact" className="hover:underline">
						Contact
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;
