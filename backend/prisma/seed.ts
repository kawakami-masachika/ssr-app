import { PrismaClient } from '@prisma/client';
import { categories, payments } from './seed.data';

const prisma = new PrismaClient();

async function main() {
  const payments = await prisma.payment.findMany();
  if (payments.length) {
    console.log('=======既に支払いデータが存在するため、削除します');
    await prisma.payment.deleteMany();
    console.log('=======データ削除が完了しました=======');
  }

  const categories = await prisma.category.findMany();
  if (categories.length) {
    console.log('=======既にカテゴリーデータが存在するため、削除します');
    await prisma.category.deleteMany();
    console.log('=======データ削除が完了しました=======');
  }

  console.log('=======カテゴリーデータの投入を開始します=======');
  await seedCategories();
  console.log('=======データ投入が完了しました=======');

  console.log('=======支払いデータの投入を開始します=======');
  await seedPayments();
  console.log('=======データ投入が完了しました=======');
}

async function seedCategories() {
  for (const category of categories) {
    const data = await prisma.category.create({
      data: category,
    });
    logSuccess(data);
  }
}

async function seedPayments() {
  for (const payment of payments) {
    const data = await prisma.payment.create({
      data: payment,
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
