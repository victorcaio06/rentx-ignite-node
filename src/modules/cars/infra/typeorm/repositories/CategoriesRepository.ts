import { Repository } from 'typeorm';

import { AppDataSource } from '@shared/infra/typeorm/app-data-source';
import { CreateCategoryDTO } from '@modules/cars/dtos/create-category-dto';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { Category } from '../entities/Category';

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

  async findById(id: string): Promise<Category> {
    return await this.categoriesRepository.findOne({ where: { id } });
  }
}
