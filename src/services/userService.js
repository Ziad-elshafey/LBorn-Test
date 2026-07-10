import * as userRepository from "../repositories/userRepository.js";
import { httpError } from "../utils/httpErrors.js";
import {
  requireBody,
  requireEmail,
  requireNonEmptyString,
  requirePositiveInt,
} from "../utils/validate.js";

export function createUser(data) {
  requireBody(data);
  const name = requireNonEmptyString(data.name, "name");
  const email = requireEmail(data.email);
  return userRepository.createUser(name, email);
}

export function listAllusers() {
  return userRepository.listAllusers();
}

export function getUserById(id) {
  const userId = requirePositiveInt(id, "id");
  const user = userRepository.getUserById(userId);
  if (!user) throw httpError(404, "User not found");
  return user;
}

export function getUserPlaylists(id) {
  const userId = requirePositiveInt(id, "id");
  const playlist = userRepository.getUserPlaylists(userId);
  if (!playlist) throw httpError(404, "User not found");
  return playlist;
}

export function deleteUser(id) {
  const userId = requirePositiveInt(id, "userId");
  const deleted = userRepository.deleteUser(userId);
  if (!deleted) throw httpError(404, "User not found");
}
