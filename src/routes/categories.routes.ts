import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryCotroller } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryCotroller.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  const getAllCategories = categoriesRespository.list();
  return response.status(200).json(getAllCategories);
});

export { categoriesRoutes };
