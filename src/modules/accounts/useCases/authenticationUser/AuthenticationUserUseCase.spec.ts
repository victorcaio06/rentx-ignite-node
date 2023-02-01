import { AppError } from '../../../../errors/AppError';
import { CreateUserDTO } from '../../dto/create-user-dto';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticationUserUseCase } from './AuthenticationUserUseCase';

let authenticateUserUseCase: AuthenticationUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate user', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticationUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });
  it('should be able to authenticate an user', async () => {
    const user: CreateUserDTO = {
      driver_license: '000123',
      email: 'meuEmailTeste@testandotudo.com.br',
      name: 'José do Teste E Maria',
      password: 'seguraASenhaDeJose',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able authenticate an nonexistent user', async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'userNotExists',
        password: 'passwordNotExists',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able authenticate with incorrect password', async () => {
    expect(async () => {
      const user: CreateUserDTO = {
        driver_license: '000123',
        email: 'meuEmailTeste@testandotudo.com.br',
        name: 'José do Teste E Maria',
        password: 'seguraASenhaDeJose',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'incorrectPassword',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
