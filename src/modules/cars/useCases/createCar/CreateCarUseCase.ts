import { ICarRepository } from '@modules/cars/repositories/ICarsRepository';
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

// @injectable()
export class CreateCarUseCase {
  constructor(
    // @inject('CarsRepository')
    private carsRepository: ICarRepository
  ) {}

  async execute({
    name,
    description,
    daily_rate,
    license_plate,
    find_amount,
    brand,
    category_id,
  }: IRequest): Promise<void> {
    const carAlreadyExits = await this.carsRepository.findByLicensePlate(
      license_plate
    );

    if (carAlreadyExits) {
      throw new AppError('Car with existing license plate!', 400);
    }

    await this.carsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      find_amount,
      brand,
      category_id,
    });
  }
}
