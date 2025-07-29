import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { User } from 'src/users/entities/user.entity';
import { Menu } from 'src/menu/entities/menu.entity';
import { CartItem } from 'src/cart-items/entities/cart-item.entity';

@Injectable()
export class CartService {
  constructor(
  ) {}

  // async addToCart(userId: number, menuItemId: number, quantity: number = 1) {
  //   const menuItem = await this.menuRepo.findOne({ where: { id: menuItemId } });
  //   if (!menuItem) throw new NotFoundException('Menu item not found');

  //   const user = await this.userRepo.findOne({ where: { id: userId } });
  //   if (!user) throw new NotFoundException('User not found');

  //   const cartItem = this.cartRepo.create({
  //     quantity,
  //     menuItem
  //   });

  //   return this.cartRepo.save(cartItem);
  // }
  


}
