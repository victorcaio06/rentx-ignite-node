import { CreateUserDTO } from '../dto/create-user-dto';

export interface IUsersRepository {
  create(data: CreateUserDTO): Promise<void>;
}
