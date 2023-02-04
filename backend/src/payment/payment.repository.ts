import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export type PaymentQueryParams = {
  offset: number;
  limit: number;
};

export type RegisterPaymentParams = {
  name: string;
  memo?: string;
  price: string;
  categoryCode: string;
};

@Injectable()
export class PaymentRepository extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async addPayment(params: RegisterPaymentParams) {
    return await this.payment.create({
      data: {
        ...params,
        price: parseInt(params.price),
        purchaseDate: new Date(),
      },
    });
  }

  findPayments(params: PaymentQueryParams) {
    return this.payment.findMany({
      take: params.limit,
      skip: params.offset,
    });
  }

  findPayment(id: number) {
    return this.payment.findUnique({
      where: {
        id: id,
      },
    });
  }
}
