import { Seeder } from '@jorgebodega/typeorm-seeding';
import { DataSource } from 'typeorm';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt'; 
import { Gender, Role } from 'src/users/enum/user.enum';
import { User } from 'src/users/entities/user.entity';

export default class UserSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const userRepo = dataSource.getRepository(User);

    const users: User[] = [];

    for (let i = 0; i < 30; i++) {
      const password = await bcrypt.hash('password123', 10); 

      users.push(
        userRepo.create({
          email: faker.internet.email(),
                 firstName: faker.person.firstName(),
                 lastName: faker.person.lastName(),
                 age: faker.number.int({ min: 18, max: 65 }),
                 gender: faker.helpers.enumValue(Gender),
                 role: faker.helpers.enumValue(Role),
                 password: faker.internet.password(),
        }),
      );
    }

    await userRepo.save(users);
    console.log('✅ 20 users seeded.');
  }
}
