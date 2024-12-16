import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const Header = () => {
	const { logout, loading, user } = useAuth();
	return (
		<header className=" bg-gradient-to-r from-[#FFD107] to-[#FFB107] text-white ">
			<div className="container mx-auto flex items-center justify-between py-4 px-6">
				<h1 className="text-2xl text-black font-bold">GoEase</h1>
				<div className="flex items-center space-x-4">
					{user ? (
						<div className="text-black">
							<p className="text-sm">Welcome, {user.userName}</p>
							<button
								onClick={() => {
									logout();
								}}
								className="text-sm bg-white text-black  px-4 py-1 rounded hover:bg-blue-300 hover:text-white transition"
							>
								Logout
							</button>
						</div>
					) : (
						<Link
							to={"/login"}
							className="text-sm bg-white text-black px-4 py-1 rounded hover:bg-gray-100 transition"
						>
							Login
						</Link>
					)}
				</div>
			</div>

			<nav className="bg-gradient-to-r from-[#FFE107] to-[#FFC107] border-t-2 text-black">
				<div className="container mx-auto flex  items-center justify-center space-x-6 py-2 px-6 text-sm">
					<Link
						to="/"
						className=" px-2 hover:text-white py-0.5 rounded-sm transition"
					>
						Home
					</Link>
					<Link
						to="/packages"
						className=" px-2 hover:text-white py-0.5 rounded-sm transition"
					>
						Destinations
					</Link>
					{user && (
						<Link
							className="  mx-auto  px-2 hover:text-white py-0.5 rounded-sm transition "
							to="/admin/dashboard"
						>
							Dashboard
						</Link>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
