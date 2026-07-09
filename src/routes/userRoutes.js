import { Router } from "express";
import {
  createUser,
  listAllusers,
  getUserById,
  getUserPlaylists,
} from "../controllers/userController.js";
const router = Router();

router.post("/", createUser);
router.get("/", listAllusers);
router.get("/:userId", getUserById);
router.get("/:userId/playlists", getUserPlaylists);

export default router;
