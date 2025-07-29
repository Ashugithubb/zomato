

import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsNumber()
  recipientId: number;

  @IsOptional()
  @IsNumber()
  orderId?: number;

  @IsOptional()
  @IsNumber()
  restaurantId?: number;
}
