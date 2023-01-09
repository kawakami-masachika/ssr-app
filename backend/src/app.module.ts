import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentRepository } from './repository/payment.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PaymentRepository],
})
export class AppModule {}
