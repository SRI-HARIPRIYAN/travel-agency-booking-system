import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import SignupScreen from "./pages/SignupScreen";
import LoginScreen from "./pages/LoginScreen.jsx";
import AdminRoute from "./admin/adminRoutes.jsx";
import PackagesScreen from "./pages/package/PackagesScreen.jsx";
import createPackageScreen from "./pages/package/CreatePackageScreen.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import UpdatePackage from "./pages/UpdatePackageScreen.jsx";
import BookingScreen from "./pages/BookingScreen.jsx";
import Invoice from "./pages/Invoice.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomeScreen />} />
			<Route path="*" element={<HomeScreen />} />
			<Route path="/login" element={<LoginScreen />} />
			<Route path="/signup" element={<SignupScreen />} />
			<Route path="/packages" element={<PackagesScreen />} />
			<Route path="/packages/:id/book" element={<BookingScreen />} />
			<Route path="/bookings/invoice" element={<Invoice />} />

			{/* admin routes */}
			<Route
				path="/packages/update/:id"
				element={<AdminRoute element={UpdatePackage} />}
			/>
			<Route
				path="newpackage"
				element={<AdminRoute element={createPackageScreen} />}
			/>
			<Route
				path="/admin"
				element={<AdminRoute element={AdminDashboard} />}
			>
				<Route
					path="dashboard"
					element={<AdminRoute element={AdminDashboard} />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
