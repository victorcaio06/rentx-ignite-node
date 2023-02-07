import { DataSource } from 'typeorm';

import { Car } from '../../../modules/cars/infra/typeorm/entities/Car';
import { User } from '../../../modules/accounts/infra/typeorm/entities/User';
import { Category } from '../../../modules/cars/infra/typeorm/entities/Category';
import { Specification } from '../../../modules/cars/infra/typeorm/entities/Specification';

export const AppDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  synchronize: true,
  entities: [Specification, User, Category, Car],
  migrations: ['./src/shared/infra/typeorm/migrations/*.{ts,js}'],
});
