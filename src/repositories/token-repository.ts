import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { prismaClient } from '../config/db';

export class TokenRepository {
  static async generate(user: User): Promise<string> {
    const token = jwt.sign(
      { id: user.id.toString() },
      process.env.JWT_SECRET as string,
      { expiresIn: '1d' }
    );

    await prismaClient.token.create({
      data: {
        token: token,
        userId: user.id,
        expiredAt: new Date(Date.now() + 86400000),
      },
    });

    return token;
  }

  static async deleteByToken(token: string): Promise<void> {
    await prismaClient.token.delete({
      where: {
        token: token,
      },
    });
  }

  static async findByToken(token: string): Promise<string | undefined> {
    const foundToken = await prismaClient.token.findUnique({
      where: {
        token: token,
      },
    });

    return foundToken?.token;
  }
}
