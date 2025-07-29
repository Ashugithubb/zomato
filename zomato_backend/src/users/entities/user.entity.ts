import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Gender, Role } from "../enum/user.enum";
import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { RestaurantRating } from "src/restaurant.ratings/entities/restaurant.rating.entity";
import { Cart } from "src/cart/entities/cart.entity";
import { Notification } from "src/notification/entities/notification.entity";
import { Order } from "src/order/entities/order.entity";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    email: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({
        type: 'enum',
        enum: Gender,
        default: Gender.MALE
    })
    gender: Gender

    @Column()
    age: number

    @Column()
    password: string

    @Column({ type: 'enum', enum: Role, default: Role.USER })
    role: Role


    @OneToMany(() => Restaurant, (r) => r.owner)
   restaurants: Restaurant[]

    @OneToMany(() => RestaurantRating, (r) => r.user)
    ratings: RestaurantRating[]

    @OneToMany(() => Cart, (cart) => cart.user)
    carts: Cart[];

    @OneToMany(() => Notification, (notification) => notification.recipient)
    notifications: Notification[];

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];



}
