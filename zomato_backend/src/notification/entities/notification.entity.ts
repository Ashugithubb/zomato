import { Order } from "src/order/entities/order.entity";
import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('notification')
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column({ default: false })
  isRead: boolean;

  @CreateDateColumn()
  createdAt: Date;

  
  @ManyToOne(() => User, (user) => user.notifications)
  recipient: User;

  
  @ManyToOne(() => Order, { nullable: true })
  order: Order;

 
  @ManyToOne(() => Restaurant, { nullable: true })
  restaurant: Restaurant;
}

