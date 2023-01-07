import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreteSpecificationUseCase } from './CreateSpecificationUseCase';

export class CreateSpecificationController {
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const createSpecificationUseCase = container.resolve(CreteSpecificationUseCase);

    createSpecificationUseCase.execute({ name, description });
    return response.sendStatus(201);
  }
}
