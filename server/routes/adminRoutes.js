import express from "express";
import { protect, isAdmin } from "../middleware/authMiddleware";
import {
	newPackage,
	updatePackage,
	deletePackage,
} from "../controller/packageController";
const router = express.Router();

router.route("/packages").post(protect, isAdmin, newPackage);
router
	.route("/packages/:id")
	.put(protect, isAdmin, updatePackage)
	.delete(protect, isAdmin, deletePackage);
