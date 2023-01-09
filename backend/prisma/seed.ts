import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const sanzai = await prisma.category.upsert({
    where: { code: 'SNZ' },
    update: {},
    create: {
      code: 'SNZ',
      name: '散財',
    },
  });
  logSuccess(sanzai, 'sanzai');

  const food = await prisma.category.upsert({
    where: { code: 'FOD' },
    update: {},
    create: {
      code: 'FOD',
      name: '食費',
    },
  });
  logSuccess(food, 'food');

  const energy = await prisma.category.upsert({
    where: { code: 'EGY' },
    update: {},
    create: {
      code: 'EGY',
      name: '光熱費',
    },
  });
  logSuccess(energy, 'energy');
}

function logSuccess(data: any, key: string) {
  console.log(`category ${key} successfully upserted!`);
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
