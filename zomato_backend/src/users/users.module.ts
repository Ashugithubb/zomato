import { Module } from '@nestjs/common';


import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './repositry/user.repositry';
import { HasingModule } from 'src/hasing/hasing.module';
import { UserController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[TypeOrmModule.forFeature([User]),HasingModule],
  controllers: [UserController],
  providers: [UsersService,UserRepository],
  exports: [UserRepository,UsersService],
})
export class UsersModule {}
