import { CreateUserDTO } from '../dto/create-user-dto';
import { User } from '../entities/User';

export interface IUsersRepository {
  create(data: CreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}
