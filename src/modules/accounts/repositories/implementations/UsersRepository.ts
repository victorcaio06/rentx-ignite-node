import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../database/app-data-source';
import { CreateUserDTO } from '../../dto/create-user-dto';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = AppDataSource.getRepository(User);
  }

  async create({
    name,
    username,
    password,
    email,
    driver_license,
  }: CreateUserDTO): Promise<void> {
    const user = this.usersRepository.create({
      name,
      username,
      password,
      email,
      driver_license,
    });

    await this.usersRepository.save(user);
  }
}
