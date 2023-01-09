import { Category, Payment } from '@prisma/client';

export const categories: Category[] = [
  {
    code: 'FOD',
    name: '食費',
  },
  {
    code: 'EGY',
    name: '光熱費',
  },
  {
    code: 'RNT',
    name: '家賃',
  },
];

export const payments: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    name: '電気代',
    price: 10000,
    categoryCode: 'EGY',
    purchaseDate: new Date(2023, 1, 1),
    memo: null,
  },
  {
    name: '家賃支払い',
    price: 60000,
    categoryCode: 'RNT',
    purchaseDate: new Date(2023, 0, 1),
    memo: null,
  },
  {
    name: '焼肉きんぐ',
    price: 5000,
    categoryCode: 'FOD',
    purchaseDate: new Date(2023, 0, 10),
    memo: '高校の友達と',
  },
];
