"use server";

import { sql } from "@/lib/db";
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  if (typeof error === "object" && error !== null && "message" in error) {
    return String(error.message);
  }
  return String(error);
}

function getErrorCode(error: unknown): string | undefined {
  if (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof error.code === "string"
  ) {
    return error.code;
  }
  return undefined;
}

function getErrorDetail(error: unknown): string | undefined {
  if (
    typeof error === "object" &&
    error !== null &&
    "detail" in error &&
    typeof error.detail === "string"
  ) {
    return error.detail;
  }
  return undefined;
}

// Custom error classes
class DatabaseError extends Error {
  constructor(message: string, public code?: string, public detail?: string) {
    super(message);
    this.name = "DatabaseError";
    Error.captureStackTrace(this, this.constructor);
  }
}
class NotFoundError extends DatabaseError {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

class ValidationError extends DatabaseError {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}
interface Url {
  id: number;
  shortUrl: string;
  redirectUrl: string;
  totalClicked: number;
  lastClicked: string | null;
  createdAt: string;
}
export async function getUrlCodeInfo(shortUrl: string) {
  try {
    if (!shortUrl || shortUrl.trim().length === 0) {
      throw new ValidationError("shortUrl cannot be empty");
    }

    const result = await sql`
          SELECT * FROM urls 
          WHERE "shortUrl" = ${shortUrl}
        `;

    return result.length > 0 ? (result[0] as Url) : null;
  } catch (error: unknown) {
    if (error instanceof ValidationError) {
      throw error;
    }
    console.error(
      `Error fetching URL with shortUrl ${shortUrl}:`,
      getErrorMessage(error)
    );
    throw new DatabaseError(
      `Failed to fetch URL: ${shortUrl}`,
      getErrorCode(error),
      getErrorDetail(error)
    );
  }
}

export async function deleteUrl(shortUrl: string): Promise<boolean> {
  try {
    if (!shortUrl || shortUrl.trim().length === 0) {
      throw new ValidationError("shortUrl cannot be empty");
    }

    const result = await sql`
        DELETE FROM urls 
        WHERE "shortUrl" = ${shortUrl}
        RETURNING *
      `;

    if (result.length === 0) {
      throw new NotFoundError(`URL with shortUrl '${shortUrl}' not found`);
    }

    return true;
  } catch (error: unknown) {
    if (error instanceof ValidationError || error instanceof NotFoundError) {
      throw error;
    }
    console.error(`Error deleting URL ${shortUrl}:`, getErrorMessage(error));
    throw new DatabaseError(
      `Failed to delete URL: ${shortUrl}`,
      getErrorCode(error),
      getErrorDetail(error)
    );
  }
}
