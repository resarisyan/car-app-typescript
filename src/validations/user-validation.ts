import { z, ZodType } from 'zod';

export class UserValidation {
  static readonly LOGIN: ZodType = z.object({
    username: z.string().min(1).max(255),
    password: z.string().min(1).max(255),
  });
}
