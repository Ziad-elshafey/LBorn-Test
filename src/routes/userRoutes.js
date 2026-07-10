import { Router } from "express";
import {
  createUser,
  listAllusers,
  getUserById,
  getUserPlaylists,
  deleteUser,
} from "../controllers/userController.js";
const router = Router();

router.post("/", createUser);
router.get("/", listAllusers);
router.get("/:userId", getUserById);
router.get("/:userId/playlists", getUserPlaylists);
router.delete("/:userId", deleteUser);

export default router;
