import { CartItem } from "src/cart-items/entities/cart-item.entity";
import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cart')
export class Cart {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column()
    totalPrice: number

    @ManyToOne(() => User, (user) => user.carts)
    user: User;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.carts)
    restaurant: Restaurant;

    @OneToMany(() => CartItem, (item) => item.cart)
    items: CartItem[];


}
