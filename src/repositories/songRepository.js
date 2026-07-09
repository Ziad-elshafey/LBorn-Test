import db from "../db.js";

export function createSong(title, artist, album, durationInSeconds) {
  const result = db
    .prepare(
      `
      INSERT INTO songs (title, artist, album, duration_in_seconds)
      VALUES (?, ?, ?, ?)
    `,
    )
    .run(title, artist, album, durationInSeconds);

  return {
    id: result.lastInsertRowid,
    title,
    artist,
    album,
    duration_in_seconds: durationInSeconds,
  };
}

export function getSongById(id) {
  return db.prepare(`SELECT * FROM songs WHERE id = ?`).get(id);
}

export function deleteSong(id) {
  const result = db.prepare(`DELETE FROM songs WHERE id = ?`).run(id);
  return result.changes > 0;
}
