/* eslint-disable prettier/prettier */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import userRouter from './app/modules/user/user.route';
import blogRouter from './app/modules/blog/blog.route';
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

export default app;
