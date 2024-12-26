/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { blogService } from './blog.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createBlog = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await blogService.createBlog(payload);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: 'Blog created successfully',
      data: result,
    });
  } catch (error) {
    res.send({
      status: false,
      message: 'Blog failed to be created',
      error,
    });
  }
};

const getBlog = async (req: Request, res: Response) => {
  try {
    const result = await blogService.getBlog();

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Blog getting successfully',
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

const getSingleBlog = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.blogId;

    const result = await blogService.getSingleBlog(blogId);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Getting Single Blog Successfully',
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

const updateBlog = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.blogId;

    const body = req.body;

    const result = await blogService.updateBlog(blogId, body);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Blog Update successfully',
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

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.blogId;

    const result = await blogService.deleteBlog(blogId);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'Blog Delete successfully',
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

export const blogController = {
  createBlog,
  getBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
