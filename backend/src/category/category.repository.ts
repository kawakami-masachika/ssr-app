import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CategoryRepository extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  fetchCategories() {
    return this.category.findMany();
  }

  createCategory(category: { code: string; name: string }) {
    return this.category.create({ data: category });
  }
}
