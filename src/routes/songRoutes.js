import { Router } from "express";
import * as songController from "../controllers/songController.js";

const router = Router();

router.post("/", songController.createSong);
router.delete("/:songId", songController.deleteSong);

export default router;
