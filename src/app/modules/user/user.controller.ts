/* eslint-disable prettier/prettier */
// req & res manage

import { NextFunction, Request, Response } from 'express';
import { userService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';

const createUser = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await userService.createUser(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'User created successfully',
    data: result,
  });
});

const getUser = catchAsync(async (req, res) => {
  const result = await userService.getUser();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User getting successfully',
    data: result,
  });
});

const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userId;

    const result = await userService.getSingleUser(userId);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Single User getting successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = catchAsync(async (req, res) => {
  const userId = req.params.userId;

  const body = req.body;

  const result = await userService.updateUser(userId, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User update successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const userId = req.params.userId;

  await userService.deleteUser(userId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'User Delete successfully',
    data: {},
  });
});

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
