import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly service: PaymentService) {}

  @Get()
  async findPayments(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('offset', ParseIntPipe) offset: number,
  ) {
    console.log(offset, limit);
    return {
      payments: await this.service.findPayments({
        offset,
        limit,
      }),
    };
  }
}
