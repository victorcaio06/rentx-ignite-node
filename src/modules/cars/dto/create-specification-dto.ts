import { Specification } from '../entities/Specification';

export class CreateSpecificationDTO extends Specification {
  name: string;
  description: string;
}
