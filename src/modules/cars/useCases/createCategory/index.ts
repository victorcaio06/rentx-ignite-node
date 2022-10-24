import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';
import { CreateCategoryController } from './CreateCategoryController';

const categoriesRepositories = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoriesUseCase(categoriesRepositories);
const createCategoryCotroller = new CreateCategoryController(createCategoryUseCase);

export { createCategoryCotroller };
