import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantRepository } from './repositry/restaurant.repositry';

@Module({
  imports:[TypeOrmModule.forFeature([Restaurant])],
  controllers: [RestaurantController],
  providers: [RestaurantService,RestaurantRepository],
  exports:[RestaurantRepository]
})
export class RestaurantModule {}
