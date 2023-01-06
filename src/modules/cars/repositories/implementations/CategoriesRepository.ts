import { Repository } from 'typeorm';
import { CreateCategoryDTO } from '../../dto/create-category-dto';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../ICategoriesRepository';
import { AppDataSource } from './../../../../database/app-data-source';

export class CategoriesRepository implements ICategoriesRepository {
  private categoryRepository: Repository<Category>;

  constructor() {
    this.categoryRepository = AppDataSource.getRepository(Category);
  }

  async create({ name, description }: CreateCategoryDTO): Promise<void> {
    const category = this.categoryRepository.create({
      description,
      name,
    });

    await this.categoryRepository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.categoryRepository.find();

    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const getCategoryByName = await this.categoryRepository.findOne({
      where: { name },
    });

    return getCategoryByName;
  }
}
