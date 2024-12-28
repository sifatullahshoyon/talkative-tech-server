/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { handleGenericError } from '../helpers/handleGenericError';
import { handleDuplicateError } from '../helpers/handleDuplicateError';
import { handleCastError } from '../helpers/handleCastError';
import { handleValidationError } from '../helpers/handleValidationError';

type TErrorResponse = {
  success: boolean;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
};

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  if (err instanceof mongoose.Error.CastError) {
    handleCastError(err, res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    handleValidationError(err, res);
  } else if (err.code && err.code === 11000) {
    handleDuplicateError(err, res);
  } else if (err instanceof Error) {
    // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //   success: false,
    //   message: err.message,
    //   error: err,
    // });
    handleGenericError(err, res);
  }
};
