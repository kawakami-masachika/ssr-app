import { Module } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({
  controllers: [PaymentController],
  providers: [PaymentRepository, PaymentService],
})
export class PaymentModule {}
