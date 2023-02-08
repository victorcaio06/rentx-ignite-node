import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { AppError } from '@shared/errors/AppError';

import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  find_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
export class CreateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    name,
    description,
    daily_rate,
    license_plate,
    find_amount,
    brand,
    category_id,
  }: IRequest): Promise<Car> {
    const categoriesRepository = new CategoriesRepository();

    const carAlreadyExits = await this.carsRepository.findByLicensePlate(
      license_plate
    );

    const categoryAlreadyExits = await categoriesRepository.findById(category_id);

    if (carAlreadyExits) {
      throw new AppError('Car with existing license plate!', 400);
    } else if (!categoryAlreadyExits) {
      throw new AppError('Category does not exist!', 400);
    }

    const car = await this.carsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      find_amount,
      brand,
      category_id,
    });

    return car;
  }
}
