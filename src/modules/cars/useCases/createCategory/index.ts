import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';
import { CreateCategoryController } from './CreateCategoryController';

export default (): CreateCategoryController => {
  const categoriesRepositories = new CategoriesRepository();

  const createCategoryUseCase = new CreateCategoriesUseCase(categoriesRepositories);

  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  );

  return createCategoryController;
};
