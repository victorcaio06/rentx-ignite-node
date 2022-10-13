import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationsService = new CreateSpecificationService(
    specificationsRepository
  );
  createSpecificationsService.execute({ name, description });
  return response.status(201).send();
});

specificationsRoutes.get('/', (request, response) => {
  const getAllSpecifications = specificationsRepository.list();
  return response.status(200).json(getAllSpecifications);
});

export { specificationsRoutes };
