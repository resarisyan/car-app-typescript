import { CarRepository } from './../repositories/car-repository';
import { ResponseError } from '../handlers/response-error';
import {
  CreateCarRequest,
  UpdateCarRequest,
} from '../models/request/car-request';
import { Validation } from '../validations/validation';
import { CarValidation } from '../validations/car-validation';
import { CarResponse, toCarResponse } from '../models/response/car-response';

export class CarService {
  static async getAll(): Promise<CarResponse[]> {
    return await CarRepository.findAll();
  }

  static async getById(id: string): Promise<CarResponse> {
    const car = await CarRepository.findById(id);
    if (!car) {
      throw new ResponseError(404, 'Car not found');
    }
    return car;
  }

  static async create(req: CreateCarRequest): Promise<CarResponse> {
    const carRequest = Validation.validate(CarValidation.CAR_INSERT, req);
    const insertCar = await CarRepository.insert(carRequest);
    return toCarResponse(insertCar);
  }

  static async update(id: string, req: UpdateCarRequest) {
    const car = await CarRepository.findById(id);
    if (!car) {
      throw new ResponseError(404, 'Car not found');
    }
    const carRequest = Validation.validate(CarValidation.CAR_UPDATE, req);
    const updatedCar = await CarRepository.update(id, carRequest);
    return toCarResponse(updatedCar);
  }

  static async delete(id: string): Promise<void> {
    const car = await CarRepository.findById(id);
    if (!car) {
      throw new ResponseError(404, 'Car not found');
    }
    await CarRepository.delete(id);
  }
}
