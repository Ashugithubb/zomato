import { Seeder } from '@jorgebodega/typeorm-seeding';
import { DataSource } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { faker } from '@faker-js/faker';
import { Gender, Role } from '../../users/enum/user.enum';

export default class UserSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const userRepo = dataSource.getRepository(User);
    const users: User[] = [];

    for (let i = 0; i < 20; i++) {
      const user = userRepo.create({
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 65 }),
        gender: faker.helpers.enumValue(Gender),
        role: faker.helpers.enumValue(Role),
        password: faker.internet.password(),
      });

      users.push(user);
    }

    await userRepo.save(users);
    console.log('✅ 20 Users seeded.');
  }
}
