import { Cart } from "src/cart/entities/cart.entity";
import { Menu } from "src/menu/entities/menu.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('carts-items')
export class CartItem {
    @PrimaryGeneratedColumn()
    id:number
    
    @ManyToOne(() => Cart, (cart) => cart.items)
    cart: Cart;

    @ManyToOne(() => Menu, (item) => item.cartItems)
    menuItem: Menu;

    @Column()
    quantity: number;

}
