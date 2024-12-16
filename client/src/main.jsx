import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth.jsx";
import { BookingProvider } from "./hooks/useBooking.jsx";
import { PackageProvider } from "./hooks/usePackage.jsx";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<PackageProvider>
				<BookingProvider>
					<BrowserRouter>
						<App />
						<ToastContainer />
					</BrowserRouter>
				</BookingProvider>
			</PackageProvider>
		</AuthProvider>
	</StrictMode>
);
