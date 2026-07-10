import * as songService from "../services/songService.js";
import { sendErrorResponse } from "../utils/httpErrors.js";

export function createSong(req, res) {
  try {
    const song = songService.createSong(req.body);
    res.status(201).json({ message: "Song Created Successfully", song });
  } catch (err) {
    sendErrorResponse(res, err);
  }
}

export function deleteSong(req, res) {
  try {
    songService.deleteSong(req.params.songId);
    res.status(200).json({ message: "Song deleted successfully" });
  } catch (err) {
    sendErrorResponse(res, err);
  }
}

export function updateSong(req, res) {
  try {
    const song = songService.updateSong(req.params.songId, req.body);
    res.status(200).json({ message: "Song updated successfully", song });
  } catch (err) {
    sendErrorResponse(res, err);
  }
}