import mongoose from "mongoose";

export const connectToDb = () => {
	mongoose
		.connect(process.env.MONGODB_URI)
		.then(() => {
			console.log("MongoDB connected");
		})
		.catch((error) => {
			console.log("Error in connecting db: ", error);
		});
};
