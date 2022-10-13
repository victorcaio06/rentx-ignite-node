import { CreateSpecificationDTO } from '../dto/create-specification-dto';
import { Specification } from '../models/Specification';

export interface ISpecificationRepository {
  create({ name, description }: CreateSpecificationDTO): void;
  findByName(name: string): Specification;
  list(): Specification[];
}
