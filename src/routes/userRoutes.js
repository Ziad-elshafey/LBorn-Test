import { Router } from "express";
import { createUser, listAllusers } from "../controllers/userController.js";
const router = Router();

router.post("/", createUser);
router.get("/", listAllusers);

export default router;
