import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
	const token = jwt.sign({ userId }, process.env.COOKIE_SECRET, {
		expiresIn: "1d",
	});
	res.cookie("token", token, {
		maxAge: 24 * 60 * 60 * 1000,
		sameSite: "lax",
		secure: process.env.NODE_ENV !== "development",
		httpOnly: true,
	});
};

export default generateToken;
