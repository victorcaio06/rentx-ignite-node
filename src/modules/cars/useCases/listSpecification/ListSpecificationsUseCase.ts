import { inject, injectable } from 'tsyringe';
import { Specification } from '../../entities/Specification';
import { ISpecificationRepository } from '../../repositories/ISpecificationsRepository';

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationsRepository: ISpecificationRepository
  ) {}

  execute(): Specification[] {
    const specifications = this.specificationsRepository.list();
    return specifications;
  }
}
