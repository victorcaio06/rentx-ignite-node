import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const checkAlreadyExists = categoriesRespository.findByName(name);
  if (checkAlreadyExists)
    response.status(400).json({ error: 'Category already exists' });

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

categoriesRoutes.get('/', (request, response) => {
  const getAllCategories = categoriesRespository.getAll();
  return response.status(200).json(getAllCategories);
});

export { categoriesRoutes };
