import { Repository } from 'typeorm';

import { AppDataSource } from '@shared/infra/typeorm/app-data-source';
import { CreateSpecificationDTO } from '@modules/cars/dtos/create-specification-dto';
import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { Specification } from '../entities/Specification';

export class SpecificationRepository implements ISpecificationRepository {
  private specificationsRepository: Repository<Specification>;

  constructor() {
    this.specificationsRepository = AppDataSource.getRepository(Specification);
  }

  async create({ name, description }: CreateSpecificationDTO): Promise<void> {
    const specification = this.specificationsRepository.create({
      name,
      description,
    });

    await this.specificationsRepository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const findSpecificationByName = await this.specificationsRepository.findOne({
      where: { name },
    });

    return findSpecificationByName;
  }

  async list(): Promise<Specification[]> {
    const getAllSpecifications = await this.specificationsRepository.find();

    return getAllSpecifications;
  }
}
