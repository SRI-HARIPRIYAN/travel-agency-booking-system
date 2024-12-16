import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
const isAdmin = () => {
	const { user } = useAuth();
	return true; /* user.isAdmin;  */ /* user && user.isAdmin; */
};

const AdminRoute = ({ element: Component }) => {
	return isAdmin() ? <Component /> : <Navigate to="/login" />;
};

export default AdminRoute;
