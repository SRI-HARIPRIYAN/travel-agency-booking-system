import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
export const protect = async (req, res, next) => {
	const token = req.cookies.token;

	if (!token) {
		return res
			.status(401)
			.json({ message: "Token not found, please login" });
	}

	try {
		const decoded = jwt.verify(token, process.env.COOKIE_SECRET);
		console.log(decoded);
		const userExists = await User.findById(decoded.userId);

		if (!userExists) {
			return res.status(401).json({
				message: "Token mismatch, please logout and login",
			});
		}

		req.user = userExists; // Attach user data to request object
		next();
	} catch (error) {
		return res.status(401).json({
			message: "Invalid or expired token, please login again",
		});
	}
};

export const isAdmin = (req, res, next) => {
	if (req.user.isAdmin) {
		next();
	} else {
		return res.status(401).json({ message: "Unauthorized request" });
	}
};
