import { Cart } from "src/cart/entities/cart.entity";
import { Menu } from "src/menu/entities/menu.entity";
import { Order } from "src/order/entities/order.entity";
import { RestaurantRating } from "src/restaurant.ratings/entities/restaurant.rating.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('restarents')
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @Column()
    description: string

    @Column()
    address: string

    @ManyToOne(() => User, (o) => o.restaurants)
    owner: User

    @OneToMany(() => Menu, (m) => m.restaurant)
    menu: Menu[]

    @OneToMany(() => RestaurantRating, (r) => r.restaurant)
    rating: RestaurantRating[]

    @OneToMany(() => Cart, (cart) => cart.restaurant)
    carts: Cart[];

    @OneToMany(() => Order, (order) => order.restaurant)
    orders: Order[];


}
