import { inject, injectable } from 'tsyringe';
import { CreateUserDTO } from '../../dto/create-user-dto';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    password,
    email,
    driver_license,
  }: CreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      password,
      email,
      driver_license,
    });
  }
}