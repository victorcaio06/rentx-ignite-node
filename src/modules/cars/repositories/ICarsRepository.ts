import { CreateCarDTO } from '../dtos/create-car-dto';
import { Car } from '../infra/typeorm/entities/Car';

export interface ICarRepository {
  create(data: CreateCarDTO): Promise<void>;
  findByLicensePlate(licensePlate: string): Promise<Car>;
}
