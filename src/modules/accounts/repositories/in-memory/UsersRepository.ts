import { CreateUserDTO } from '../../dto/create-user-dto';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  users: User[] = [];

  async create({
    name,
    email,
    password,
    driver_license,
  }: CreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign({ name, email, password, driver_license });

    this.users.push(user);
  }

  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
