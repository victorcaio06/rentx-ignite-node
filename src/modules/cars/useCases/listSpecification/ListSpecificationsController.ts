import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

export class ListSpecificationsController {
  handle(request: Request, response: Response) {
    const listSpecificationUseCase = container.resolve(ListSpecificationsUseCase);
    const listSpecifications = listSpecificationUseCase.execute();

    return response.status(200).json(listSpecifications);
  }
}
