import { Repository } from 'typeorm';
import { CreateCategoryDTO } from '../../dto/create-category-dto';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../ICategoriesRepository';
import { AppDataSource } from './../../../../database/app-data-source';

export class CategoriesRepository implements ICategoriesRepository {
  private categoriesRepository: Repository<Category>;

  constructor() {
    this.categoriesRepository = AppDataSource.getRepository(Category);
  }

  async create({ name, description }: CreateCategoryDTO): Promise<void> {
    const category = this.categoriesRepository.create({
      description,
      name,
    });

    await this.categoriesRepository.save(category);
  }

  async findByName(name: string): Promise<Category> {
    const getCategoryByName = await this.categoriesRepository.findOne({
      where: { name },
    });

    return getCategoryByName;
  }

  async list(): Promise<Category[]> {
    const categories = await this.categoriesRepository.find();

    return categories;
  }
}
