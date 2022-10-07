import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const categoriesRespository = new CategoriesRepository();
  categoriesRespository.create({ name, description });
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

export { categoriesRoutes };
