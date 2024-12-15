import { useContext, createContext, useState } from "react";
import { toast } from "react-toastify";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const signup = async (userName, email, password) => {
		try {
			setLoading(true);
			const response = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ userName, email, password }),
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || data.error);
			}
			setUser(data);
			toast.success(data.message);
		} catch (error) {
			toast.error(error);
		} finally {
			setLoading(false);
		}
	};
	const login = async (userName, password) => {
		try {
			setLoading(true);
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ userName, password }),
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || data.error);
			}
			setUser(data);
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
	return (
		<UserContext.Provider value={userValue}>
			{children}
		</UserContext.Provider>
	);
};

export default useAuth = () => {
	return useContext(UserContext);
};
