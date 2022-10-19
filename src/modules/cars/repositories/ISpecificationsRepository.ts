import { CreateSpecificationDTO } from '../dto/create-specification-dto';
import { Specification } from '../models/Specification';

export interface ISpecificationRepository {
  create({ name, description }: CreateSpecificationDTO): void;
  list(): Specification[];
  findByName(name: string): Specification;
}
