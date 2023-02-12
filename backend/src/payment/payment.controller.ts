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
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

class CreatePaymentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  categoryCode: string;

  @IsString()
  @IsOptional()
  memo: string | null;
}

@Controller('payments')
export class PaymentController {
  constructor(private readonly service: PaymentService) {}

  @Get()
  async findPayments(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('offset', ParseIntPipe) offset: number,
  ) {
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
  async createPayment(@Body() params: CreatePaymentDto) {
    console.log(params);
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
