import { DataSource, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Menu } from '../entities/menu.entity';
import { CreateMenuDto } from '../dto/create-menu.dto';
import { UpdateMenuDto } from '../dto/update-menu.dto';





@Injectable()
export class RestaurantRepository extends Repository<Menu> {
    constructor(private datasource: DataSource) {
        super(Menu, datasource.createEntityManager());
    }

    async AddUser(dto: CreateMenuDto) {
        return await this.save(dto);
    }

    async findById(id: number) {
        return await this.findOneBy({ id });
    }

    async findAll() {
        return await this.find();
    }

    async updateUser(id: number, updateDto: UpdateMenuDto) {
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