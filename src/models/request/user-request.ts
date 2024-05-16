import { User } from '@prisma/client';
import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export type LoginUserRequest = {
  username: string;
  password: string;
};

export interface UserRequest extends Request {
  user?: User;
  token?: string | JwtPayload;
}
