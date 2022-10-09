import { Category } from '../models/Category';

export class CreateUserDTO extends Category {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;
}
