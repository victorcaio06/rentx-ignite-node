import { Request, Response } from 'express';
import { CreateCategoriesUseCase } from './CreateCategoriesUseCase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createCategoryUseCase.execute({ name, description });
    return response.sendStatus(201);
  }
}
