import express from "express";
import { getPackage, getPackages } from "../controller/packageController.js";
const router = express.Router();

router.route("/").get(getPackages);
router.route("/:id").get(getPackage);
