import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Category } from '../enum/category.enum';

export class CreateMenuDto {
  @IsString()
  foodItem: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsEnum(Category)
  category: Category;

  @IsNumber()
  restaurantId: number;
}
