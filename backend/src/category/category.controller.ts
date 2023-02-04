import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

type CreateCategoryParams = {
  code: string;
  name: string;
};
@Controller('category')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Get()
  async fetchCategories() {
    return {
      items: await this.service.fetch(),
    };
  }

  @Post()
  async createCategory(@Body() body: any) {
    return {
      newCategory: await this.service.create(body),
    };
  }
}
