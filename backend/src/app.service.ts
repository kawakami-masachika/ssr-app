import { Injectable } from '@nestjs/common';
import { PaymentRepository } from './repository/payment.repository';

@Injectable()
export class AppService {
  constructor(private paymentRepository: PaymentRepository) {}
  getHello(): string {
    this.paymentRepository.addPayment();
    return 'Hello World!';
  }
}
