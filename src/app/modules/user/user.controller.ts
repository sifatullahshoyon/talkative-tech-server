/* eslint-disable prettier/prettier */
// req & res manage

import { Request, Response } from 'express';
import { userService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await userService.createUser(payload);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUser();

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User getting successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const result = await userService.getSingleUser(userId);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Single User getting successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const body = req.body;

    const result = await userService.updateUser(userId, body);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User update successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    await userService.deleteUser(userId);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User Delete successfully',
      data: {},
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

export const userController = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
