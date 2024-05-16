import { Car } from '@prisma/client';

export type CarResponse = {
  id: string;
  capacity: number;
  model: string;
  year: number;
  plate: string;
  manufacture: string;
  image: string;
  rentPerDay: number;
  description: string;
  transmission: string;
};

export function toCarResponse(car: Car): CarResponse {
  return {
    id: car.id,
    capacity: car.capacity,
    model: car.model,
    year: car.year,
    plate: car.plate,
    manufacture: car.manufacture,
    image: car.image,
    rentPerDay: car.rentPerDay,
    description: car.description,
    transmission: car.transmission,
  };
}
