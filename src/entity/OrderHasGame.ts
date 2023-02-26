import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Order } from "./Order";
import { Game } from "./Game";

@Entity()
export class OrderHasGame {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order_id: number;

    @Column()
    game_id: number;

    @ManyToOne(() => Order, order => order.orderHasGames)
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @ManyToOne(() => Game, game => game.orderHasGames)
    @JoinColumn({ name: 'game_id' })
    game: Game;

}