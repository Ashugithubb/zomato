import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestaurantRatingsService } from './restaurant.ratings.service';
import { CreateRestaurantRatingDto } from './dto/create-restaurant.rating.dto';
import { UpdateRestaurantRatingDto } from './dto/update-restaurant.rating.dto';

@Controller('restaurant.ratings')
export class RestaurantRatingsController {
  constructor(private readonly restaurantRatingsService: RestaurantRatingsService) {}

  @Post()
  create(@Body() createRestaurantRatingDto: CreateRestaurantRatingDto) {
    return this.restaurantRatingsService.create(createRestaurantRatingDto);
  }

  @Get()
  findAll() {
    return this.restaurantRatingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantRatingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestaurantRatingDto: UpdateRestaurantRatingDto) {
    return this.restaurantRatingsService.update(+id, updateRestaurantRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantRatingsService.remove(+id);
  }
}
