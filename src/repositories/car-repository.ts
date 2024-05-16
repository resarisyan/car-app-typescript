import { Car } from '@prisma/client';
import { prismaClient } from '../config/db';
import {
  CreateCarRequest,
  UpdateCarRequest,
} from '../models/request/car-request';

export class CarRepository {
  static async findAll(): Promise<Car[]> {
    return await prismaClient.car.findMany();
  }

  static async findById(id: string): Promise<Car | null> {
    return await prismaClient.car.findUnique({
      where: {
        id: id,
      },
    });
  }

  static async insert(car: CreateCarRequest): Promise<Car> {
    return await prismaClient.car.create({
      data: car,
    });
  }

  static async update(id: string, car: UpdateCarRequest): Promise<Car> {
    return await prismaClient.car.update({
      where: {
        id: id,
      },
      data: car,
    });
  }

  static async delete(id: string): Promise<void> {
    await prismaClient.car.delete({
      where: {
        id: id,
      },
    });
  }
}
