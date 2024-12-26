/* eslint-disable prettier/prettier */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import userRouter from './app/modules/user/user.route';
import blogRouter from './app/modules/blog/blog.route';
import { StatusCodes } from 'http-status-codes';
const app: Application = express();

// use parsers:
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live',
  });
});

// global error handlers
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message,
    error: err,
  });
});

export default app;
