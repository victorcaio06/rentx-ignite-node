import { CreateSpecificationDTO } from '../../dto/create-specification-dto';
import { Specification } from '../../models/Specification';
import { ISpecificationRepository } from '../ISpecificationsRepository';

export class SpecificationRepository implements ISpecificationRepository {
  constructor() {
    this.specifications = [];
  }

  private specifications: Specification[];
  private static INSTANCE: SpecificationRepository;

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: CreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const checkSpecificationName = this.specifications.find(
      (specifications) => specifications.name === name
    );
    return checkSpecificationName;
  }

  list(): Specification[] {
    return this.specifications;
  }
}
