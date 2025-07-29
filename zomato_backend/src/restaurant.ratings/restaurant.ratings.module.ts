import { Module } from '@nestjs/common';
import { RestaurantRatingsService } from './restaurant.ratings.service';
import { RestaurantRatingsController } from './restaurant.ratings.controller';

@Module({
  controllers: [RestaurantRatingsController],
  providers: [RestaurantRatingsService],
})
export class RestaurantRatingsModule {}
