import { inject, injectable } from 'tsyringe';
import { Specification } from '../../infra/typeorm/entities/Specification';
import { ISpecificationRepository } from '../../repositories/ISpecificationsRepository';

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationsRepository: ISpecificationRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.list();
    return specifications;
  }
}
