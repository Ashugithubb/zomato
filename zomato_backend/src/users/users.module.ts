import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './repositry/user.repositry';
import { HasingModule } from 'src/hasing/hasing.module';

@Module({
  imports:[TypeOrmModule.forFeature([User]),HasingModule],
  controllers: [UsersController],
  providers: [UsersService,UserRepository],
  exports: [UserRepository],
})
export class UsersModule {}
