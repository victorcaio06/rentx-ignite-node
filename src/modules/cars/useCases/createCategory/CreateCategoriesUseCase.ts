import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ name, description }: IRequest): void {
    const checkAlreadyExists = this.categoriesRepository.findByName(name);
    if (checkAlreadyExists) throw new Error('Category already exists!');

    this.categoriesRepository.create({ name, description });
  }
}
