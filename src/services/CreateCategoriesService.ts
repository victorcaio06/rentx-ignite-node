import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoriesService {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute({ name, description }: IRequest): void {
    const checkAlreadyExists = this.categoriesRepository.findByName(name);
    if (checkAlreadyExists) throw new Error('Category already exists!');

    this.categoriesRepository.create({ name, description });
  }
}
