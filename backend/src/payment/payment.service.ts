import { Injectable } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';
import { PaymentQueryParams } from './payment.repository';

@Injectable()
export class PaymentService {
  constructor(private readonly repository: PaymentRepository) {}

  findPayments(params: PaymentQueryParams) {
    return this.repository.findPayments(params);
  }
}
