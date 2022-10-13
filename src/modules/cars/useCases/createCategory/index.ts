import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';
import { CreateCategoryController } from './CreateCategoryController';

const categoriesRepositories = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoriesUseCase(
  categoriesRepositories
);
const createCategoryCotroller = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryCotroller, createCategoryUseCase };
