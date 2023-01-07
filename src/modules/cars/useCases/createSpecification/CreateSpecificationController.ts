import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreteSpecificationUseCase } from './CreateSpecificationUseCase';

export class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createSpecificationUseCase = container.resolve(CreteSpecificationUseCase);

    await createSpecificationUseCase.execute({ name, description });
    return response.sendStatus(201);
  }
}
