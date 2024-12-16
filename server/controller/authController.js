import User from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";

const signup = async (req, res) => {
	try {
		const { userName, email, password } = req.body;
		const userExists = await User.findOne({ email });
		if (userExists) {
			return res.status(400).json({ message: "User already exist" });
		}
		const user = await User.create({
			userName,
			email,
			password,
		});
		if (user) {
			generateToken(res, user._id);
			res.status(201).json({
				_id: user._id,
				userName: user.userName,
				email: user.email,
				isAdmin: user.isAdmin,
			});
		} else {
			res.status(400).json({ error: "Invalid credentials" });
		}
	} catch (error) {
		console.log("error in signup controller");
		res.status(500).json({ error: error.message });
	}
};

const login = async (req, res) => {
	try {
		const { userName, password } = req.body;
		let user = await User.findOne({ userName });

		if (user && (await user.comparePassword(password))) {
			generateToken(res, user._id);
			res.status(200).json({
				_id: user._id,
				userName: user.userName,
				email: user.email,
				isAdmin: user.isAdmin,
			});
		} else {
			res.status(400).json({ error: "invalid credentials" });
		}
	} catch (error) {
		console.log("error in login controller");
		res.status(500).json({ error: error?.message });
	}
};

const logout = async (req, res) => {
	try {
		res.cookie("token", "", {
			httpOnly: true,
			expires: new Date(0),
		});
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error);
		res.status(500).json({ error: error?.message });
	}
};

export { signup, login, logout };
