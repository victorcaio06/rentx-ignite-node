import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoriesService } from '../modules/cars/services/CreateCategoriesService';

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createCategoriesService = new CreateCategoriesService(
    categoriesRespository
  );
  createCategoriesService.execute({ name, description });
  return response.sendStatus(201);
});

// categoriesRoutes.get('/', (request, response) => {
//   // const categoriesWithoutId = categories.map((categories) => {
//   //   return { ...categories, id: undefined };
//   // });
//   const categoriesRespository = new CategoriesRepository();
//   const show = categoriesRespository.getCategories();
//   return response.status(200).json({ show });
// });

categoriesRoutes.get('/', (request, response) => {
  const getAllCategories = categoriesRespository.list();
  return response.status(200).json(getAllCategories);
});

export { categoriesRoutes };
