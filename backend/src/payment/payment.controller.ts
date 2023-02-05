import { Payment } from '@prisma/client';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PaymentParams } from './payment.repository';
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

  @Get(':id')
  async findPayment(@Param('id', ParseIntPipe) params: number) {
    return {
      item: await this.service.findPayment(params),
    };
  }

  @Post()
  async createPayment(@Body() params: PaymentParams) {
    const payment = await this.service.createPayment(params);
    return { data: payment };
  }

  @Put(':id')
  async updatePayment(
    @Param('id', ParseIntPipe) id: number,
    @Body() params: PaymentParams,
  ) {
    const payment = await this.service.updatePayment(id, params);
    return { data: payment };
  }
}
