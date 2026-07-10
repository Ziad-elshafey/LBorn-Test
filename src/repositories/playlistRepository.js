import db from "../db.js";

export function createPlaylist(userId, name, description) {
  const result = db
    .prepare(
      `
      INSERT INTO playlists (user_id, name, description)
      VALUES (?, ?, ?)
      `,
    )
    .run(userId, name, description);

  return {
    id: result.lastInsertRowid,
    userId,
    name,
    description,
  };
}

export function addSong(songId, playlistId) {
  const result = db
    .prepare(
      `
      INSERT INTO playlist_songs (playlist_id, song_id)
      VALUES (?, ?)
      `,
    )
    .run(playlistId, songId);

  return {
    playlistId,
    songId,
  };
}

export function getSongs(playlistId) {
  const result = db
    .prepare(
      `
      SELECT song_id, s.title, s.artist, s.album, s.duration_in_seconds FROM playlist_songs ps JOIN songs s ON ps.song_id = s.id WHERE ps.playlist_id = ?
      `,
    )
    .all(playlistId);
  return result;
}