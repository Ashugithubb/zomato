import { Injectable } from '@nestjs/common';
import { CreateRestaurantRatingDto } from './dto/create-restaurant.rating.dto';
import { UpdateRestaurantRatingDto } from './dto/update-restaurant.rating.dto';

@Injectable()
export class RestaurantRatingsService {
  create(createRestaurantRatingDto: CreateRestaurantRatingDto) {
    return 'This action adds a new restaurantRating';
  }

  findAll() {
    return `This action returns all restaurantRatings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurantRating`;
  }

  update(id: number, updateRestaurantRatingDto: UpdateRestaurantRatingDto) {
    return `This action updates a #${id} restaurantRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurantRating`;
  }
}
