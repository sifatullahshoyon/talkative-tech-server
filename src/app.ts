/* eslint-disable prettier/prettier */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import userRouter from './app/modules/user/user.route';
import blogRouter from './app/modules/blog/blog.route';
import { globalErrorHandler } from './app/middlwares/globalErrorHandler';
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
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//     success: false,
//     message: err.message,
//     error: err,
//   });
// });

app.use(globalErrorHandler);

app.use('*', (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({
    status: false,
    message: 'Route Not Found',
  });
});

export default app;
