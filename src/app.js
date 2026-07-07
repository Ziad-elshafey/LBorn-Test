import express from "express";
import userRoutes from "./routes/userRoutes.js";
import songRoutes from "./routes/songRoutes.js";
import playlistRoutes from "./routes/playlistRoutes.js";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/playlists", playlistRoutes);
app.use("/songs", songRoutes);

export default app;
