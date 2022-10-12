import { CreateCategoryDTO } from '../dto/create-category-dto';
import { Category } from '../models/Category';
import { ICategoriesRepository } from './ICategoriesRepository';

export class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: CreateCategoryDTO): void {
    console.log(name, description);
  }
}
