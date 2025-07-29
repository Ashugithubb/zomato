import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { HasingService } from 'src/hasing/hasing.service';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepo:Repository<User>,
               private readonly hasingService: HasingService ){}
  async create(createUserDto: CreateUserDto) {
    const email = createUserDto.email;
    const existing = await this.userRepo.findOneBy({email})
    if(existing){
      return{"msg":"User Already Exists"}
    }
    createUserDto.password = await this.hasingService.hashPassword(createUserDto.password);
     await this.userRepo.save(createUserDto);
     return "User Registred Successfully";
  }

  async findOneByemail(email:string) {
    return await this.userRepo.findOne({
      where:{email},
      select:['email','id','role','password']
    });
  }

  

  async findOne(id:number){
      return await this.userRepo.findOneBy({id})
  }

//   async findBusId(id: number): Promise<number | null> {
//   const user = await this.userRepo.findOne({
//     where: { id },
//     relations: ['bus'],
//   });

//   if (!user || !user.bus) {
//     return null; // or throw NotFoundException if preferred
//   }

//   return user.bus.busId;
// }
  async findBus(userId:number){
    return await this.userRepo.findOne({
        where:{id:userId},
        relations:['bus'],
    })
  }

  async findAll() {
    return await this.userRepo.find();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepo.update(id,updateUserDto);
  }
  
  async remove(id: number) {
    return await this.userRepo.delete(id);
  }
}