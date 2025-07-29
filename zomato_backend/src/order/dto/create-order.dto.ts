import { IsEnum, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderItemDto {
  @IsNumber()
  menuItemId: number;

  @IsNumber()
  quantity: number;
}

export class CreateOrderDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  restaurantId: number;

  @IsEnum(['pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled'])
  @IsOptional()
  status?: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';

  @IsNumber()
  totalPrice: number;

  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  @IsNotEmpty()
  items: CreateOrderItemDto[];
}
