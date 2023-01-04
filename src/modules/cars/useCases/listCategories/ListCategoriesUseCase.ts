import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

export class ListCategoriesUseCase {
  constructor(private categoriesRespository: ICategoriesRepository) {}
  execute(): Category[] {
    const categories = this.categoriesRespository.list();
    return categories;
  }
}
