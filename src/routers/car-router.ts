import express from 'express';
import { authMiddleware } from '../middlewares/auth-middleware';
import { CarController } from '../controllers/car-controller';
export const carRouter = express.Router();

carRouter.use(authMiddleware);
carRouter.get('/', CarController.getCar);
carRouter.get('/:id', CarController.getCarById);
carRouter.post('/', CarController.createCar);
carRouter.put('/:id', CarController.updateCar);
