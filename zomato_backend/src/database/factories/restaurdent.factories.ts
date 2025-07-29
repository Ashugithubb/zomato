import { Seeder } from '@jorgebodega/typeorm-seeding';
import { DataSource } from 'typeorm';
import { Restaurant } from '../../restaurant/entities/restaurant.entity';
import { User } from '../../users/entities/user.entity';
import { faker } from '@faker-js/faker';
import { Role } from '../../users/enum/user.enum';

export default class RestaurantSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const restaurantRepo = dataSource.getRepository(Restaurant);
    const userRepo = dataSource.getRepository(User);

    // Get existing users with the restaurant owner role
    const owners = await userRepo.find({
      where: { role: Role.OWNER },
    });

    if (owners.length === 0) {
      console.warn('⚠️ No restaurant owners found. Please seed users with RESTAURANT_OWNER role first.');
      return;
    }

    const restaurants: Restaurant[] = [];

    for (let i = 0; i < 10; i++) {
      const randomOwner = faker.helpers.arrayElement(owners);

      const restaurant = restaurantRepo.create({
        name: faker.company.name(),
        description: faker.company.name(),
        address: faker.location.streetAddress(),
        owner: randomOwner,
      });

      restaurants.push(restaurant);
    }

    await restaurantRepo.save(restaurants);
    console.log('✅ 10 Restaurants seeded.');
  }
}
