import { SpecificationRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreteSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepository = SpecificationRepository.getInstance();

const createSpecificationUseCase = new CreteSpecificationUseCase(
  specificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
