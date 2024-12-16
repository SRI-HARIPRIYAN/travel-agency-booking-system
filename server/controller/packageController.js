import Package from "../model/packageModel.js";
const getPackages = async (req, res) => {
	try {
		const packages = await Package.find({}).select(
			" -createdAt -updatedAt -__v"
		);
		res.status(200).json(packages);
	} catch (error) {
		return res.status(500).json({ error: "Internal server error" });
	}
};
const getPackage = async (req, res) => {
	try {
		const { id: packageId } = req.params;
		const reqestedPackage = await Package.findById(packageId).select(
			" -createdAt -updatedAt -__v"
		);
		if (reqestedPackage) {
			res.status(200).json(reqestedPackage);
		} else {
			return res.status(404).json({ message: "Package not found" });
		}
	} catch (error) {
		return res.status(500).json({ error: "Internal server error" });
	}
};
const newPackage = async (req, res) => {
	try {
		const packageCreated = await Package.create({
			title: req.body.title,
			description: req.body.description,
			price: req.body.price,
			availableDates: req.body.availableDates,
			imageURL: req.body.imageURL,
		});

		if (packageCreated) {
			res.status(201).json({
				message: "Created successfully",
				packageCreated,
			});
		} else {
			return res
				.status(400)
				.json({ error: "Error creating new Package try again later" });
		}
	} catch (error) {
		return res.status(500).json({ error: "Internal server error" });
	}
};
const updatePackage = async (req, res) => {
	try {
		const updates = req.body;
		const { id: packageId } = req.params;
		const updatedPackage = await Package.findByIdAndUpdate(
			packageId,
			updates,
			{ new: true }
		);

		if (updatedPackage) {
			res.status(201).json({
				message: "Created successfully",
				updatedPackage,
			});
		} else {
			return res
				.status(400)
				.json({ error: "Error updating Package try again later" });
		}
	} catch (error) {
		return res.status(500).json({ error: "Internal server error" });
	}
};
const deletePackage = async (req, res) => {
	try {
		const { id: packageId } = req.params;
		const updatedPackage = await Package.findByIdAndDelete(packageId);

		if (updatedPackage) {
			res.status(201).json({
				message: "Deleted successfully",
			});
		} else {
			return res
				.status(400)
				.json({ error: "Error deleting package, try again later" });
		}
	} catch (error) {
		return res.status(500).json({ error: "Internal server error" });
	}
};
export { getPackage, getPackages, newPackage, updatePackage, deletePackage };
