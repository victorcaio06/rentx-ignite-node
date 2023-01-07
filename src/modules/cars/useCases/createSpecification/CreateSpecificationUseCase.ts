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

  async execute({ name, description }: IRequest): Promise<void> {
    const checkAlreadyExists = await this.specificationRepository.findByName(name);

    if (checkAlreadyExists) throw new Error('Specification already exists!');

    await this.specificationRepository.create({ name, description });
  }
}
