import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { Restaurant } from './restaurant/entities/restaurant.entity';
import { Menu } from './menu/entities/menu.entity';
import { User } from './users/entities/user.entity';
import { Cart } from './cart/entities/cart.entity';
import { CartItem } from './cart-items/entities/cart-item.entity';
import { Order } from './order/entities/order.entity';
import { OrderItem } from './order-item/entities/order-item.entity';
import { Notification } from './notification/entities/notification.entity';
import { RestaurantRating } from './restaurant.ratings/entities/restaurant.rating.entity';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
 entities:[User,Menu,Restaurant,Menu,Cart,CartItem,Notification,Order,OrderItem,RestaurantRating],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false,
});
export default AppDataSource;