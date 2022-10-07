import { Router } from 'express';
import { Category } from '../models/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const category = new Category();
  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);
  return response.sendStatus(201);
});

categoriesRoutes.get('/', (request, response) => {
  // const categoriesWithoutId = categories.map((categories) => {
  //   return { ...categories, id: undefined };
  // });
  return response.status(200).json(categories);
});

export { categoriesRoutes };
