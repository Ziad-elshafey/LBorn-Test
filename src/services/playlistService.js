import * as playlistRepository from "../repositories/playlistRepository.js";
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
