import * as playlistRepository from "../repositories/playlistRepository.js";
import { httpError } from "../utils/httpErrors.js";
import {
  requireBody,
  requireNonEmptyString,
  requirePositiveInt,
} from "../utils/validate.js";

export function createPlaylist(data) {
  requireBody(data);
  const userId = requirePositiveInt(data.userId, "userId");
  const name = requireNonEmptyString(data.name, "name");
  return playlistRepository.createPlaylist(userId, name, data.description);
}

export function addSong(data, playlistId) {
  requireBody(data);
  const songId = requirePositiveInt(data.songId, "songId");
  const validPlaylistId = requirePositiveInt(playlistId, "playlistId");
  return playlistRepository.addSong(songId, validPlaylistId);
}
export function getSongs(id) {
  const playListId = requirePositiveInt(id, "id");
  const songs = playlistRepository.getSongs(playListId);
  if (!songs) throw httpError(404, "playlist not found");
  return songs;
}

export function deletePlaylist(id) {
  const playlistId = requirePositiveInt(id, "id");
  const playlist = playlistRepository.getPlaylist(playlistId);
  if (!playlist) throw httpError(404, "playlist not found");
  return playlistRepository.deletePlaylist(playlistId);
}

export function updatePlaylist(id, data) {
  requireBody(data);
  const playlistId = requirePositiveInt(id, "id");
  const name =
    data.name !== undefined ? requireNonEmptyString(data.name, "name") : null;
  const description =
    data.description !== undefined && typeof data.description === "string"
      ? data.description || null
      : null;
  if (name === null && description === null) {
    throw httpError(
      400,
      "At least one field (name, description) must be provided",
    );
  }
  const updated = playlistRepository.updatePlaylist(
    playlistId,
    name,
    description,
  );
  if (!updated) throw httpError(404, "playlist not found");
  return updated;
}
