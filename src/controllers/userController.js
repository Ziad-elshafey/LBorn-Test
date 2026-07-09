import * as userService from "../services/userService.js";
import { sendErrorResponse } from "../utils/httpErrors.js";

export function createUser(req, res) {
  try {
    const user = userService.createUser(req.body);
    res.status(201).json({ message: "User Created Successfully", user });
  } catch (err) {
    sendErrorResponse(res, err);
  }
}

export function listAllusers(req, res) {
  try {
    const users = userService.listAllusers();
    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (err) {
    sendErrorResponse(res, err);
  }
}

export function getUserById(req, res) {
  try {
    const user = userService.getUserById(req.params.userId);
    res.status(200).json({ message: "User fetched successfully", user });
  } catch (err) {
    sendErrorResponse(res, err);
  }
}

export function getUserPlaylists(req, res) {
  try {
    const playlists = userService.getUserPlaylists(req.params.userId);
    res
      .status(200)
      .json({ message: "User playlists fetched successfully", playlists });
  } catch (err) {
    sendErrorResponse(res, err);
  }
}
