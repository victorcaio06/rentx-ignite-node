import { Category } from '../../entities/Category';
import { CreateCategoryDTO } from '../../dtos/create-category-dto';
import { ICategoriesRepository } from '../ICategoriesRepository';

export class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async create({ name, description }: CreateCategoryDTO): Promise<void> {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }

  async findByName(name: string): Promise<Category> {
    return this.categories.find((category) => category.name === name);
  }
}
