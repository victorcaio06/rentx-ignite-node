import { Router } from 'express';
import { createCategoryCotroller } from '../modules/cars/useCases/createCategory';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createCategoryCotroller.handle(request, response);
});

export { specificationsRoutes };
