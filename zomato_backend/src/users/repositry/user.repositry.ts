import { DataSource, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private datasource: DataSource) {
        super(User, datasource.createEntityManager());
    }

    async AddUser(dto: CreateUserDto) {
        return await this.save(dto);
    }

    async findById(id: number) {
        return await this.findOneBy({ id });
    }

    async findAll() {
        return await this.find();
    }

    async updateUser(id: number, updateDto: UpdateUserDto) {
        const result = await super.update(id, updateDto);

        if (result.affected === 0) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        return 'updated';
    }

    async deleteUser(id: number) {
        return await super.delete(id);
    }
    
}