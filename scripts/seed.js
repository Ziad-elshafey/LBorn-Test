import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, '..', 'database', 'luftborn.db');

if (!fs.existsSync(dbPath)) {
  console.error('Database not found. Run `npm run init-db` first.');
  process.exit(1);
}

const db = new Database(dbPath);
db.pragma('foreign_keys = ON');

const seedPath = path.join(__dirname, '..', 'database', 'seed.sql');
const seed = fs.readFileSync(seedPath, 'utf-8');
db.exec(seed);

db.close();
console.log('Seed data inserted successfully.');
