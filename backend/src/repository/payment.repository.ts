import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PaymentRepository extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect().catch(() => console.log('error'));
    console.log('inited');
  }

  async addPayment() {
    const newPayment = await this.payment.create({
      data: {
        name: '散財',
        memo: '意志が弱かったが故の出費',
        price: 1000,
        purchaseDate: new Date(),
        categoryId: 1,
      },
    });
    console.log(newPayment);
  }
}
