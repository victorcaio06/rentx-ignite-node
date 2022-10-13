import { Specification } from '../models/Specification';

export class CreateSpecificationDTO extends Specification {
  name: string;
  description: string;
}
