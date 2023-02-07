import { CreateCarDTO } from '@modules/cars/dtos/create-car-dto';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarRepository } from '../ICarsRepository';

export class CarsRepositoryInMemory implements ICarRepository {
  cars: Car[] = [];

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    find_amount,
    brand,
    category_id,
  }: CreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      daily_rate,
      license_plate,
      find_amount,
      brand,
      category_id,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(licensePlate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === licensePlate);
  }
}
