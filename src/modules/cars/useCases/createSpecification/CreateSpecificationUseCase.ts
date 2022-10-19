import { ISpecificationRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

export class CreteSpecificationUseCase {
  constructor(private speficicationRespository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const checkAlreadyExists = this.speficicationRespository.findByName(name);
    if (checkAlreadyExists) throw new Error('Specification already exists!');

    this.speficicationRespository.create({ name, description });
  }
}
