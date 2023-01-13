import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
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
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new Error('User already exists');

    const passwordHash = await hash(password, 9);

    await this.usersRepository.create({
      name,
      password: passwordHash,
      email,
      driver_license,
    });
  }
}
