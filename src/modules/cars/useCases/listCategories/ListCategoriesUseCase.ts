import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  id: string;
}

export class ListCategoriesUseCase {
  constructor(private categoriesRespository: ICategoriesRepository) {}
}
