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
