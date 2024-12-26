/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { blogController } from './blog.controller';

const blogRouter = Router();

blogRouter.post('/create-blog', blogController.createBlog);
blogRouter.get('/:blogId', blogController.getSingleBlog);
blogRouter.get('/', blogController.getBlog);
blogRouter.put('/:blogId', blogController.updateBlog);
blogRouter.delete('/:blogId', blogController.deleteBlog);

export default blogRouter;
