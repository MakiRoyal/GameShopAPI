import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { OrderHasGame } from "./OrderHasGame";
import { User } from "./User";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @OneToMany(() => OrderHasGame, orderHasGame => orderHasGame.order)
    orderHasGames: OrderHasGame[];

    @ManyToOne(() => User, user => user.order)
    @JoinColumn({ name: 'user_id' })
    user: User;
    
}
