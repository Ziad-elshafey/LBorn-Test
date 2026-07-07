import { httpError } from "./httpErrors.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function requireBody(data) {
  if (!data || typeof data !== "object") {
    throw httpError(400, "Request body is required");
  }
  return data;
}

export function requireNonEmptyString(value, fieldName) {
  if (value === undefined || value === null || typeof value !== "string") {
    throw httpError(400, `${fieldName} is required`);
  }

  const trimmed = value.trim();
  if (!trimmed) {
    throw httpError(400, `${fieldName} is required`);
  }

  return trimmed;
}

export function requirePositiveInt(value, fieldName) {
  const num = Number(value);
  if (!Number.isInteger(num) || num <= 0) {
    throw httpError(400, `${fieldName} must be a positive integer`);
  }
  return num;
}

export function requireEmail(value) {
  if (value === undefined || value === null || typeof value !== "string") {
    throw httpError(400, "email is required");
  }

  const trimmed = value.trim();
  if (!trimmed) {
    throw httpError(400, "email is required");
  }

  if (!EMAIL_REGEX.test(trimmed)) {
    throw httpError(400, "email must be a valid email address");
  }

  return trimmed;
}
