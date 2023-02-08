import { Repository } from 'typeorm';

import { CreateCarDTO } from '@modules/cars/dtos/create-car-dto';

import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

import { AppDataSource } from '@shared/infra/typeorm/app-data-source';

import { Car } from '../entities/Car';
import { Category } from '../entities/Category';

export class CarsRepository implements ICarsRepository {
  private carsRepository: Repository<Car>;

  constructor() {
    this.carsRepository = AppDataSource.getRepository(Car);
  }

  async create({
    name,
    description,
    brand,
    daily_rate,
    find_amount,
    license_plate,
    category_id,
  }: CreateCarDTO): Promise<Car> {
    const category = new Category();
    category.id = category_id;

    const car = this.carsRepository.create({
      name,
      description,
      brand,
      daily_rate,
      find_amount,
      license_plate,
      category,
    });

    await this.carsRepository.save(car);

    return car;
  }

  async findByLicensePlate(licensePlate: string): Promise<Car> {
    return await this.carsRepository.findOne({
      where: { license_plate: licensePlate },
    });
  }
}
