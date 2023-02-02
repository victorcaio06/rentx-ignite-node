import { CreateSpecificationDTO } from '../dtos/create-specification-dto';
import { Specification } from '../infra/typeorm/entities/Specification';

export interface ISpecificationRepository {
  create({ name, description }: CreateSpecificationDTO): Promise<void>;
  list(): Promise<Specification[]>;
  findByName(name: string): Promise<Specification>;
}
