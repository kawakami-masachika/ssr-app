import { PrismaClient } from '@prisma/client';
import { categories } from './seed.data';

const prisma = new PrismaClient();

async function main() {
  console.log('=======カテゴリーデータの投入を開始します=======');
  await seedCategories();
  console.log('=======データ投入が完了しました=======');
}

async function seedCategories() {
  for (const category of categories) {
    const data = await prisma.category.upsert({
      where: { code: category.code },
      update: {},
      create: category,
    });
    logSuccess(data);
  }
}

function logSuccess(data: any) {
  console.log(`inserted data: ${JSON.stringify(data)}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
