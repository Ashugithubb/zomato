import { IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCartItemDto } from 'src/cart-items/dto/create-cart-item.dto';

export class CreateCartDto {
  @IsNumber()
  totalPrice: number;

  @IsNumber()
  userId: number;

  @IsNumber()
  restaurantId: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateCartItemDto)
  items?: CreateCartItemDto[];
}
