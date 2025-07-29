import { IsInt, IsNotEmpty, IsPositive, Min, Max } from 'class-validator';

export class CreateRestaurantRatingDto {
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

 
  @IsNotEmpty()
  restaurantId: number;

  @IsNotEmpty()
  userId: number;
}
