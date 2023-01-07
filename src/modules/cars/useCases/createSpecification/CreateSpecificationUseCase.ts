import { inject, injectable } from 'tsyringe';
import { ISpecificationRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreteSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationRepository
  ) {}

  execute({ name, description }: IRequest): void {
    const checkAlreadyExists = this.specificationRepository.findByName(name);

    if (checkAlreadyExists) throw new Error('Specification already exists!');

    this.specificationRepository.create({ name, description });
  }
}
