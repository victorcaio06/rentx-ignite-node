import { Category } from '../entities/Category';
import { CreateCategoryDTO } from '../dto/create-category-dto';

export interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: CreateCategoryDTO): Promise<void>;
}
