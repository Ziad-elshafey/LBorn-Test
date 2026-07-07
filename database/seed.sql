INSERT OR IGNORE INTO users (id, name, email) VALUES (1, 'Ziad elshafey', 'ziadelshafey@example.com');

INSERT OR IGNORE INTO songs (id, title, artist, album, duration_in_seconds) VALUES
(1, 'Heseeny', 'TUL8TE', 'Narein', 214),
(2, 'Placebo', 'Legecy', 'Placebo', 219),
(3, 'Lelly Yah', 'Marwan Pablo', 'The Last Piece of Art', 190),
(4, 'From The Start', 'Laufey', 'Bewitched', 170),
(5, 'Elwala Hamo geh', 'Hamo ElMorshedy', 'ElWala Hamo Geh', 223);

INSERT OR IGNORE INTO playlists (id, user_id, name, description) VALUES
(1, 1, 'heya feen el far7a', 'my all time favs');

INSERT OR IGNORE INTO playlist_songs (playlist_id, song_id) VALUES
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5);
