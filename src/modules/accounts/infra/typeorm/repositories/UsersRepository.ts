import { Repository } from 'typeorm';

import { AppDataSource } from '@shared/infra/typeorm/app-data-source';
import { CreateUserDTO } from '@modules/accounts/dto/create-user-dto';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { User } from '../entities/User';

export class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = AppDataSource.getRepository(User);
  }

  async create({
    name,
    password,
    email,
    driver_license,
    avatar,
    id,
  }: CreateUserDTO): Promise<void> {
    const user = this.usersRepository.create({
      id,
      name,
      password,
      email,
      driver_license,
      avatar,
    });

    await this.usersRepository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { email } });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });

    return user;
  }
}
