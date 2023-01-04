import { Category } from '../entities/Category';

export class CreateCategoryDTO extends Category {
  name: string;
  description: string;
}
