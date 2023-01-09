import { PrismaClient } from '@prisma/client';
import { categories } from './seed.data';

const prisma = new PrismaClient();

async function main() {
  console.log('=======カテゴリーデータの投入を開始します=======');
  await seedCategories();
  console.log('=======データ投入が完了しました=======');
}

async function seedCategories() {
  return Promise.all(
    categories.map(async (c) => {
      const data = await prisma.category.upsert({
        where: { code: c.code },
        update: {},
        create: {
          code: c.code,
          name: c.name,
        },
      });
      logSuccess(data, data.name);
      return data;
    }),
  );
}

function logSuccess(data: any, key: string) {
  console.log(`${key}のデータ投入に成功しました`);
  console.log(`data: ${JSON.stringify(data)}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
