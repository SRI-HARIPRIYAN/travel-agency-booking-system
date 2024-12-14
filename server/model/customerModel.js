import mongoose from "mongoose";

const customerModel = mongoose.Schema({
	userName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: true,
	},
	no_of_travellers: {
		type: Number,
		required: true,
	},
	package: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Package",
	},
});

const Customer = mongoose.model("Customer", customerModel);

export default Customer;
