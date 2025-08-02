import 'reflect-metadata';
import AppDataSource from 'src/data.source';
import UserSeeder from './factories/user.factories';
import RestaurantSeeder from './factories/restaurdent.factories';

async function seed() {
  await AppDataSource.initialize();
  await new UserSeeder().run(AppDataSource); 
   await new  RestaurantSeeder().run(AppDataSource);
  console.log(' User seeding complete');
}

seed();
