export function httpError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

export function getStatusCode(err) {
  if (err.statusCode) {
    return err.statusCode;
  }

  switch (err.code) {
    case "SQLITE_CONSTRAINT_UNIQUE":
      return 409;
    case "SQLITE_CONSTRAINT_FOREIGNKEY":
    case "SQLITE_CONSTRAINT_CHECK":
      return 400;
    default:
      return 500;
  }
}

function getClientMessage(err, statusCode) {
  if (statusCode === 500) {
    return "Internal server error";
  }

  if (err.statusCode) {
    return err.message;
  }

  const message = err.message || "";

  if (message.includes("FOREIGN KEY constraint failed")) {
    return "Referenced resource does not exist";
  }

  if (message.includes("UNIQUE constraint failed: users.email")) {
    return "Email already in use";
  }

  if (message.includes("UNIQUE constraint failed: playlists.user_id, playlists.name")) {
    return "Playlist name already exists for this user";
  }

  return err.message;
}

export function sendErrorResponse(res, err) {
  const statusCode = getStatusCode(err);
  const message = getClientMessage(err, statusCode);

  res.status(statusCode).json({ message });
}
