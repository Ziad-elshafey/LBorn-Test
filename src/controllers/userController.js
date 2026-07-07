import * as userService from "../services/userService.js";

export function createUser(req, res) {
  try {
    const user = userService.createUser(req.body);
    res.status(201).json({ message: "User Created Successfully", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export function listAllusers(req, res) {
  try {
    const users = userService.listAllusers();
    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
