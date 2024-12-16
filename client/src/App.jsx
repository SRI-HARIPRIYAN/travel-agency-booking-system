import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import SignupScreen from "./pages/SignupScreen";
import LoginScreen from "./pages/LoginScreen.jsx";
import AdminRoute from "./admin/adminRoutes.jsx";
import PackagesScreen from "./pages/package/PackagesScreen.jsx";
import createPackageScreen from "./pages/package/CreatePackageScreen.jsx";
import PackageScreen from "./pages/package/PackageScreen.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomeScreen />} />
			<Route path="*" element={<HomeScreen />} />
			<Route path="/login" element={<LoginScreen />} />
			<Route path="/signup" element={<SignupScreen />} />
			<Route path="/packages" element={<PackagesScreen />} />
			<Route path="/packages/:id" element={<PackageScreen />} />

			{/* admin routes only */}
			<Route
				path="/newpackage"
				element={<AdminRoute element={createPackageScreen} />}
			/>
		</Routes>
	);
};

export default App;
