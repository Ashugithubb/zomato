import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';
import { Menu } from 'src/menu/entities/menu.entity';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { Cart } from 'src/cart/entities/cart.entity';
import { CartItem } from 'src/cart-items/entities/cart-item.entity';
import { Notification } from 'src/notification/entities/notification.entity';
import { Order } from 'src/order/entities/order.entity';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { RestaurantRating } from 'src/restaurant.ratings/entities/restaurant.rating.entity';


export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: parseInt(configService.get<string>('DB_PORT') ?? '5432', 10),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE'),
    synchronize: false,
    entities:[User,Menu,Restaurant,Menu,Cart,CartItem,Notification,Order,OrderItem,RestaurantRating]
   

  }),
};