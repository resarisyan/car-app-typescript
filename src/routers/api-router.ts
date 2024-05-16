import express from 'express';
import { errorMiddleware } from '../middlewares/error-middleware';
import { authRouter } from './auth-router';
import { carRouter } from './car-router';

export const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/car', carRouter);
apiRouter.use(errorMiddleware);
