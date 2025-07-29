import { OrderItem } from "src/order-item/entities/order-item.entity";
import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ default: 'pending' })
    status: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    totalPrice: number;

    @ManyToOne(() => User, (user) => user.orders)
    user: User;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders)
    restaurant: Restaurant;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.order, {
        cascade: true,
    })
    items: OrderItem[];
}
