import { IsInt, IsPositive } from 'class-validator';

export class CreateOrderItemDto {
  @IsInt()
  @IsPositive()
  quantity: number;

  @IsInt()
  orderId: number;

  @IsInt()
  menuItemId: number;
}
