import { CreateSpecificationDTO } from '../dto/create-specification-dto';
import { Specification } from '../entities/Specification';

export interface ISpecificationRepository {
  create({ name, description }: CreateSpecificationDTO): Promise<void>;
  list(): Promise<Specification[]>;
  findByName(name: string): Promise<Specification>;
}
