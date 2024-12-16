import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	availableDates: [
		{
			type: Date,
		},
	],
	image: {
		type: String,
		required: true,
	},
});

const Package = mongoose.model("Package", packageSchema);

export default Package;
