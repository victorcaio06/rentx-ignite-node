import { CreateCategoryDTO } from '../dto/create-category-dto';
import { Category } from '../models/Category';
import { ICategoriesRepository } from './ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  constructor() {
    this.categories = [];
  }
  private categories: Category[];

  create({ name, description }: CreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string) {
    const checkCategoryName = this.categories.find(
      (categories) => categories.name === name
    );
    return checkCategoryName;
  }
}
