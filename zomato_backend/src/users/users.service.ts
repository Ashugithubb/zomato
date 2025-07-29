import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositry/user.repositry';
import { HasingService } from 'src/hasing/hasing.service';

@Injectable()
export class UsersService {
   constructor(private readonly userRepository: UserRepository,
              private readonly hasingService:HasingService
   ) {}
  async createUser(createUserDto: CreateUserDto) {
    createUserDto.password = await this.hasingService.hashPassword(createUserDto.password);
    return this.userRepository.save(createUserDto);
  }

  
  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    return await this.userRepository.findById(id) ;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
