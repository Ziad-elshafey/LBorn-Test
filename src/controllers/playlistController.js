import * as playlistService from "../services/playlistService.js";
import { sendErrorResponse } from "../utils/httpErrors.js";

export function createPlaylist(req, res) {
  try {
    const playList = playlistService.createPlaylist(req.body);
    res.status(201).json({
      message: "Play List Created Successfully",
      playList,
    });
  } catch (err) {
    sendErrorResponse(res, err);
  }
}

export function addSong(req, res) {
  try {
    const song = playlistService.addSong(req.body, req.params.playlistId);
    res.status(201).json({ message: "Song added successfuly!", song });
  } catch (err) {
    sendErrorResponse(res, err);
  }
}

export function getSongs(req, res) {
  try {
    const songs = playlistService.getSongs(req.params.playlistId);
    res.status(200).json({ message: "songs fetched successfully", songs });
  } catch (err) {
    sendErrorResponse(res, err);
  }
}

export function deletePlaylist(req, res) {
  try {
    playlistService.deletePlaylist(req.params.playlistId);
    res.status(200).json({ message: "Playlist deleted successfully" });
  } catch (err) {
    sendErrorResponse(res, err);
  }
}
export function updatePlaylist(req, res) {
  try {
    const playlist = playlistService.updatePlaylist(req.params.playlistId, req.body);
    res.status(200).json({ message: "Playlist updated successfully" });
  } catch (err) {
    sendErrorResponse(res, err);
  }
}