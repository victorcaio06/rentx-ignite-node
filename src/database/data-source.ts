import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

const port = process.env.DB_PORT as unknown as number;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  subscribers: [],
  migrations: ['migration/*.js'],
});
