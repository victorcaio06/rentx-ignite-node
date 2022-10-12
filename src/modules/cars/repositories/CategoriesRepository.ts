import { Category } from '../models/Category';
import { CreateCategoryDTO } from '../dto/create-category-dto';
import { v4 as uuidv4 } from 'uuid';

export class CategoriesRepository {
  constructor() {
    this.categories = [];
  }
  private categories: Category[];

  create({ name, description }: CreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      id: uuidv4(),
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
