import { User } from '@prisma/client';
import { prismaClient } from '../config/db';

export class UserRepository {
  static async findUserByUsername(username: string): Promise<User | null> {
    return await prismaClient.user.findUnique({
      where: {
        username: username,
      },
    });
  }

  static async findUserByToken(token: string): Promise<User | null> {
    return await prismaClient.user.findFirst({
      where: {
        tokens: {
          some: {
            token: token,
          },
        },
      },
    });
  }
}
