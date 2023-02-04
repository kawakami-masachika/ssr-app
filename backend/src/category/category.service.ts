import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private repository: CategoryRepository) {}

  fetch() {
    return this.repository.fetchCategories();
  }
}
