import db from "../db.js";
export function createUser(name, email) {
  const result = db
    .prepare(
      `
      INSERT INTO users (name, email)
      VALUES (?, ?)
      `,
    )
    .run(name, email);

  return {
    id: result.lastInsertRowid,
    name,
    email,
  };
}
export function listAllusers() {
  return db.prepare(`SELECT * FROM users`).all();
}

export function getUserById(id) {
  return db.prepare(`SELECT * FROM users WHERE id = ?`).get(id);
}

export function getUserPlaylists(id) {
  const playlists = db
    .prepare(`SELECT id, name, description FROM playlists WHERE user_id = ?`)
    .all(id);

  const getSongs = db.prepare(`
    SELECT s.id, s.title, s.artist
    FROM playlist_songs ps
    INNER JOIN songs s ON s.id = ps.song_id
    WHERE ps.playlist_id = ?
  `);

  for (const playlist of playlists) {
    playlist.songs = getSongs.all(playlist.id);
  }

  return playlists;
}

export function deleteUser(id) {
  const result = db.prepare(`DELETE FROM users WHERE id = ?`).run(id);
  return result.changes > 0;
}
