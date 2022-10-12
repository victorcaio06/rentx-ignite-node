import { Category } from '../models/Category';
import { CreateCategoryDTO } from '../dto/create-category-dto';

export interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: CreateCategoryDTO): void;
}
