import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    await createCarUseCase.execute({
      name: 'name Car',
      description: 'description Car',
      daily_rate: 100,
      license_plate: 'abc123',
      find_amount: 60,
      brand: 'brand',
      category_id: 'category',
    });
  });

  it('should not be able to create a car with exits license plate', async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'First car',
        description: 'description Car',
        daily_rate: 100,
        license_plate: 'abc123',
        find_amount: 60,
        brand: 'brand',
        category_id: 'category',
      });

      await createCarUseCase.execute({
        name: 'Second car',
        description: 'description Car',
        daily_rate: 100,
        license_plate: 'abc123',
        find_amount: 60,
        brand: 'brand',
        category_id: 'category',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
