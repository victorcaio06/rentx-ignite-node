import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryCotroller } from '../modules/cars/useCases/createCategory';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryCotroller.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return ListCategoriesController.handle();
});

export { categoriesRoutes };
