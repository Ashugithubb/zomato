import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('ratings')
export class RestaurantRating {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    rating:number

    @ManyToOne(()=>Restaurant,(r)=>r.rating)
    restaurant:Restaurant

    @ManyToOne(()=>User,(u)=>u.ratings)
    user:User

}
