import { Category } from '../models/Category';

export class CreateUserDTO extends Category {
  name: string;
  description: string;
}
