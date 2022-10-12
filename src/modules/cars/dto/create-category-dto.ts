import { Category } from '../models/Category';

export class CreateCategoryDTO extends Category {
  name: string;
  description: string;
}
