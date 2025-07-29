import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
