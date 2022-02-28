import express from 'express';
import { bookRouter } from './resources/book';
import { userRouter } from './resources/user/user.router';

export const restRouter = express.Router();
restRouter.use('/books', bookRouter);
restRouter.use('/users', userRouter);