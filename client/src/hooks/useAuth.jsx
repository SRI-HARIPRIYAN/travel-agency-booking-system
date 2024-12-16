import { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const signup = async (formData) => {
		try {
			setLoading(true);
			const response = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
				credentials: "include",
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || data.error);
			}
			setUser(data);
			localStorage.setItem("user", JSON.stringify(data));
			toast.success(data.message);
		} catch (error) {
			toast.error(error.message || error.error);
		} finally {
			setLoading(false);
		}
	};
	const login = async (formData) => {
		try {
			setLoading(true);
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
				credentials: "include",
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || data.error);
			}
			setUser(data);
			localStorage.setItem("user", JSON.stringify(data));
			toast.success(data.message);
		} catch (error) {
			toast.error(error);
		} finally {
			setLoading(false);
		}
	};
	const logout = async () => {
		try {
			setLoading(true);
			const response = await fetch("/api/auth/logout", {
				method: "POST",
				credentials: "include",
			});
			const data = await response.json();
			setUser(null);
			if (!response.ok) {
				throw new Error(data.message || data.error);
			}
			setUser(null);
			localStorage.removeItem("user");
			toast.success(data.message);
		} catch (error) {
			toast.error(error);
		} finally {
			setLoading(false);
		}
	};

	const userValue = {
		signup,
		login,
		logout,
		loading,
		user,
	};

	useEffect(() => {
		const data = localStorage.getItem("user")
			? JSON.parse(localStorage.getItem("user"))
			: null;
		setUser(data);
	}, []);

	return (
		<AuthContext.Provider value={userValue}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
