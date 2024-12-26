/* eslint-disable prettier/prettier */
import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlog = async (payload: IBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const getBlog = async () => {
  const result = await Blog.find();
  return result;
};

const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

const updateBlog = async (id: string, data: IBlog) => {
  const result = await Blog.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const blogService = {
  createBlog,
  getBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
