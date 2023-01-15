import { config } from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import * as jsonwebtoken from 'jsonwebtoken';

import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

config();

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new Error('Unauthenticated user!');

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = jsonwebtoken.verify(
      token,
      process.env.SECRET_KEY
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) throw new Error('User does not exist!');

    next();
  } catch {
    throw new Error('Invalid token!');
  }
}
