import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../database/app-data-source';
import { CreateSpecificationDTO } from '../../dtos/create-specification-dto';
import { Specification } from '../../entities/Specification';
import { ISpecificationRepository } from '../ISpecificationsRepository';

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
