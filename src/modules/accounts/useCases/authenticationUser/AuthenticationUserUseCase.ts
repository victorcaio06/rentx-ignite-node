import * as bcrypt from 'bcrypt';
import * as jsonwebtoken from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { config } from 'dotenv';

config();

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };

  token: string;
}

@injectable()
export class AuthenticationUserUseCase {
  private secretKey = process.env.SECRET_KEY;

  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Email or password incorrect!');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email or password incorrect!');
    }

    const token = jsonwebtoken.sign(
      { user: user.name, email: user.email },
      this.secretKey,
      { subject: user.id, expiresIn: '1d' }
    );

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}
