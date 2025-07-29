import { DataSource, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Restaurant } from '../entities/restaurant.entity';
import { CreateRestaurantDto } from '../dto/create-restaurant.dto';
import { UpdateRestaurantDto } from '../dto/update-restaurant.dto';
import { ILike } from 'typeorm';

@Injectable()
export class RestaurantRepository extends Repository<Restaurant> {
    constructor(private datasource: DataSource) {
        super(Restaurant, datasource.createEntityManager());
    }


    async searchByName(name: string): Promise<Restaurant[]> {
        return await this.find({
            where: {
                name: ILike(`%${name}%`),
            },
        });
    }


    async AddUser(dto: CreateRestaurantDto) {
        return await this.save(dto);
    }

    async findById(id: number) {
        return await this.findOneBy({ id });
    }

    async findAll() {
        return await this.find();
    }

    async updateUser(id: number, updateDto: UpdateRestaurantDto) {
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