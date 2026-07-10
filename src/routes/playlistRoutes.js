import { Router } from "express";
import * as playListController from "../controllers/playlistController.js";

const router = Router();

router.post("/", playListController.createPlaylist);
router.post("/:playlistId/songs", playListController.addSong);
router.get("/:playlistId/songs", playListController.getSongs);
router.delete("/:playlistId", playListController.deletePlaylist);
router.patch("/:playlistId", playListController.updatePlaylist);

export default router;
