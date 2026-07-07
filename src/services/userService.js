import * as userRepository from "../repositories/userRepository.js";

export function createUser(data) {
  if (!data.name || !data.email) {
    throw new Error("name or/and email are missing");
  }
  return userRepository.createUser(data.name, data.email);
}

export function listAllusers() {
  return userRepository.listAllusers();
}
