/* eslint-disable prettier/prettier */
import { blogService } from './blog.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';

const createBlog = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await blogService.createBlog(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Blog created successfully',
    data: result,
  });
});

const getBlog = catchAsync(async (req, res) => {
  const result = await blogService.getBlog();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog getting successfully',
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req, res) => {
  const blogId = req.params.blogId;

  const result = await blogService.getSingleBlog(blogId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Getting Single Blog Successfully',
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const blogId = req.params.blogId;

  const body = req.body;

  const result = await blogService.updateBlog(blogId, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog Update successfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const blogId = req.params.blogId;

  const result = await blogService.deleteBlog(blogId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog Delete successfully',
    data: result,
  });
});

export const blogController = {
  createBlog,
  getBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
