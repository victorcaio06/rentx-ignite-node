import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
  handle(request: Request, response: Response): Response {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const listCategories = listCategoriesUseCase.execute();

    return response.status(200).json(listCategories);
  }
}
