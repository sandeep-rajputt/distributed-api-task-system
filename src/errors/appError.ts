export type AppError = {
  statusCode: number;
  message: string;
  isOperational: boolean;
  details?: unknown;
};

export function createError(
  statusCode: number,
  message: string,
  isOperational = true,
  details?: unknown
): AppError {
  return { statusCode, message, isOperational, details };
}
