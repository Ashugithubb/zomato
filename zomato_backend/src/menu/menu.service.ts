import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
@Injectable()
export class MenuService {
constructor(@InjectRepository(Menu) private readonly menuRepo:Repository<Menu>){}

async searchMenusInRestaurant(restaurantId: number, keyword: string) {
  return this.menuRepo.find({
    where: {
      restaurant: { id: restaurantId },
      foodItem: ILike(`%${keyword}%`)
    },
    relations: ['restaurant']
  });
}


  create(createMenuDto: CreateMenuDto) {
    return 'This action adds a new menu';
  }

  findAll() {
    return `This action returns all menu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
