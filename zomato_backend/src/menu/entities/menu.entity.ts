import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../enum/category.enum";
import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { CartItem } from "src/cart-items/entities/cart-item.entity";

@Entity('menus')
export class Menu {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    foodItem:string

    @Column()
    price:number

    @Column()
    quantity:number

    @Column({type:"enum",enum:Category,default:"Veg"})
    category:Category

    @ManyToOne(()=>Restaurant,(r)=>r.menu)
    restaurant:Restaurant

    @OneToMany(()=>CartItem,(c)=>c.menuItem)
    cartItems : CartItem[]

}
