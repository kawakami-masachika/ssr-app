import { Injectable } from '@nestjs/common';
import { PaymentRepository, RegisterPaymentParams } from './payment.repository';
import { PaymentQueryParams } from './payment.repository';

@Injectable()
export class PaymentService {
  constructor(private readonly repository: PaymentRepository) {}

  findPayments(params: PaymentQueryParams) {
    return this.repository.findPayments(params);
  }

  findPayment(id: number) {
    return this.repository.findPayment(id);
  }

  createPayment(params: RegisterPaymentParams) {
    return this.repository.addPayment(params);
  }
}
