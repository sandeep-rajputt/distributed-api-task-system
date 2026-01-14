import type { Request, Response, NextFunction } from "express";
import { type AppError, createError } from "../errors/appError.js";

function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  if (isAppError(error)) {
    return res.status(error.statusCode).json({
      success: false,
      error: {
        message: error.message,
        detail: error.details || null,
      },
    });
  }

  console.log("Unexpected Error : ", error);

  return res.status(500).json({
    success: false,
    error: {
      message: "Internal server error",
    },
  });
}

function isAppError(error: unknown): error is AppError {
  return (
    typeof error === "object" &&
    error !== null &&
    "statusCode" in error &&
    "message" in error &&
    "isOperational" in error
  );
}

export default errorHandler;
