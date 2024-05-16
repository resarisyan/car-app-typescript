import { z, ZodType } from 'zod';

export class CarValidation {
  static readonly CAR_INSERT: ZodType = z.object({
    plate: z.string().min(1).max(255),
    manufacture: z.string().min(1).max(255),
    model: z.string().min(1).max(255),
    image: z.string().min(1).max(255),
    rentPerDay: z.number(),
    capacity: z.number(),
    description: z.string().min(1).max(255),
    transmission: z.string().min(1).max(255),
    year: z.number(),
  });

  static readonly CAR_UPDATE: ZodType = z.object({
    plate: z.string().min(1).max(255).optional(),
    manufacture: z.string().min(1).max(255).optional(),
    model: z.string().min(1).max(255).optional(),
    image: z.string().min(1).max(255).optional(),
    rentPerDay: z.number().optional(),
    capacity: z.number().optional(),
    description: z.string().min(1).max(255).optional(),
    transmission: z.string().min(1).max(255).optional(),
    year: z.number().optional(),
  });
}
