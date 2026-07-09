import * as songRepository from "../repositories/songRepository.js";
import { httpError } from "../utils/httpErrors.js";
import {
  requireBody,
  requireNonEmptyString,
  requirePositiveInt,
} from "../utils/validate.js";

export function createSong(data) {
  requireBody(data);
  const title = requireNonEmptyString(data.title, "title");
  const artist = requireNonEmptyString(data.artist, "artist");
  const album = data.album || null;
  const durationInSeconds = requirePositiveInt(
    data.duration_in_seconds,
    "duration_in_seconds",
  );
  return songRepository.createSong(title, artist, album, durationInSeconds);
}

export function deleteSong(id) {
  const songId = requirePositiveInt(id, "id");
  const deleted = songRepository.deleteSong(songId);
  if (!deleted) throw httpError(404, "Song not found");
  return deleted;
}
