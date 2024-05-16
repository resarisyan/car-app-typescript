import { Request, Response, NextFunction } from 'express';
import { CarService } from '../services/car-service';
import {
  CreateCarRequest,
  UpdateCarRequest,
} from '../models/request/car-request';

export class CarController {
  static async getCar(req: Request, res: Response, next: NextFunction) {
    try {
      const cars = await CarService.getAll();
      res.json({
        success: true,
        message: 'Cars found',
        data: cars,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getCarById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const car = await CarService.getById(id);
      res.json({
        success: true,
        message: 'Car found',
        data: car,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createCar(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateCarRequest = req.body as CreateCarRequest;
      const car = await CarService.create(request);
      res.json({
        success: true,
        message: 'Car created',
        data: car,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateCar(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const request: UpdateCarRequest = req.body as UpdateCarRequest;
      const car = await CarService.update(id, request);
      res.json({
        success: true,
        message: 'Car updated',
        data: car,
      });
    } catch (error) {
      next(error);
    }
  }
}
