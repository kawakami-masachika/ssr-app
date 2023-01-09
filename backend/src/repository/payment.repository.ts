import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PaymentRepository extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async addPayment() {
    const newPayment = await this.payment.create({
      data: {
        name: '散財',
        memo: '意志が弱かったが故の出費',
        price: 1000,
        purchaseDate: new Date(),
        categoryCode: 'EGY',
      },
    });
    console.log(newPayment);
  }
}
