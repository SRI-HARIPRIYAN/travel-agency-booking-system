import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
export const protect = async (req, res, next) => {
	const token = req.cookie.token;
	if (token) {
		const userId = jwt.sign(token, process.env.COOKIE_SECRET);
		const userExists = await User.findById(userId).select(
			"userName email isAdmin"
		);
		if (userExists) {
			res.user = userExists;
			next();
		} else {
			return res.status(401).json({
				message: "Token mismatch,please logout and login",
			});
		}
	} else {
		return res
			.status(401)
			.json({ message: "Token not found, please login" });
	}
};

export const isAdmin = (req, res, next) => {
	if (req.user.isAdmin) {
		next();
	} else {
		return res.status(401).json({ message: "Unauthorized request" });
	}
};
