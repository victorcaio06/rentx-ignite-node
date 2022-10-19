import { Router } from 'express';
import { createCategoryCotroller } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createCategoryCotroller.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { specificationsRoutes };
