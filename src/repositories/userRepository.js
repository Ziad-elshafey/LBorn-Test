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
  const playlistNames = db
    .prepare(`SELECT id, name, description FROM playlists WHERE user_id = ?`)
    .all(id);

  return playlistNames;
}
