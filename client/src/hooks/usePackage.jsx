import { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const PackageContext = createContext();

export const PackageProvider = ({ children }) => {
	const [packages, setPackages] = useState([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const getPackages = async () => {
		try {
			setLoading(true);
			const response = await fetch("/api/packages/", {
				method: "GET",
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || data.error);
			}
			setPackages(data);
		} catch (error) {
			toast.error(error);
		} finally {
			setLoading(false);
		}
	};
	const getPackage = async (packageId) => {
		try {
			setLoading(true);
			const response = await fetch(`/api/packages/${packageId}`, {
				method: "GET",
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || data.error);
			}
			return data;
		} catch (error) {
			toast.error(error);
		} finally {
			setLoading(false);
		}
	};

	const createPackage = async (packageData) => {
		try {
			setLoading(true);
			const response = await fetch("/api/admin/packages", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(packageData),
				credentials: "include",
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || data.error);
			}
			getPackages();
			toast.success(data.message);
			toast.success("Package created successfully");
			navigate("/");
		} catch (error) {
			toast.error(error);
		} finally {
			setLoading(false);
		}
	};

	const deletePackage = async (packageId) => {
		try {
			setLoading(true);
			const response = await fetch(`/api/admin/packages/${packageId}`, {
				method: "DELETE",
				credentials: "include",
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || data.error);
			}
			getPackages();
			toast.success(data.message);
		} catch (error) {
			toast.error(error);
		} finally {
			setLoading(false);
		}
	};
	const updatePackage = async (packageId, packageUpdates) => {
		try {
			setLoading(true);
			const response = await fetch(`/api/admin/packages/${packageId}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(packageUpdates),
				credentials: "include",
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || data.error);
			}
			getPackages();
			toast.success(data.message);
		} catch (error) {
			toast.error(error);
		} finally {
			setLoading(false);
		}
	};
	const packageValue = {
		getPackage,
		getPackages,
		packages,
		loading,
		createPackage,
		updatePackage,
		deletePackage,
	};

	useEffect(() => {
		getPackages();
	}, []);

	return (
		<PackageContext.Provider value={packageValue}>
			{children}
		</PackageContext.Provider>
	);
};

export const usePackage = () => {
	return useContext(PackageContext);
};
