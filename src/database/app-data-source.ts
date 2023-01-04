import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/Category';
import { Specification } from '../modules/cars/entities/Specification';

export const AppDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  synchronize: true,
  entities: [Category, Specification],
  migrations: ['./src/database/migrations/*.{ts,js}'],
});
