import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Get()
  async fetchCategories() {
    return {
      items: await this.service.fetch(),
    };
  }
}
