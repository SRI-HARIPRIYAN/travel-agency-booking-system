import mongoose from "mongoose";

const packageModel = mongoose.Schema({
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
	imageURL: {
		type: String,
		required: true,
	},
});

const Package = mongoose.model("Package", packageModel);

export default Package;
