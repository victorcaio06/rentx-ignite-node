import { Request, Response } from 'express';
import { CreteSpecificationUseCase } from './CreateSpecificationUseCase';

export class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreteSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({ name, description });
    return response.sendStatus(201);
  }
}
