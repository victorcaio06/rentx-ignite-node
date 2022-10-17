import { Request, Response } from 'express';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

export class ListCategoriesController {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  handle(request: Request, response: Response) {
    const getAllCategories = this.categoriesRepository.list();
    return response.status(200).json(getAllCategories);
  }
}
