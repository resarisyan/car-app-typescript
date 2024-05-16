import { ResponseError } from '../handlers/response-error';
import { Response, NextFunction } from 'express';
import { UserRequest } from '../models/request/user-request';
import { UserRepository } from '../repositories/user-repository';

export const authMiddleware = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
      return next(
        new ResponseError(401, 'Unauthorized - Missing or invalid token')
      );
    }

    const token = authHeader.split(' ')[1];
    const user = await UserRepository.findUserByToken(token);
    if (!user) {
      return next(new ResponseError(401, 'Unauthorized - User not found'));
    }

    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    next(err);
  }
};
