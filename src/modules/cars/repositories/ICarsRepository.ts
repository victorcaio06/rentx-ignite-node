import { CreateCarDTO } from '../dtos/create-car-dto';
import { Car } from '../infra/typeorm/entities/Car';

export interface ICarsRepository {
  create(data: CreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
}
