import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { OrderHasGame } from "./OrderHasGame";
import { Category } from "./Category";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    quantity: number;
    
    @Column()
    price: number;

    @OneToMany(() => OrderHasGame, orderHasGame => orderHasGame.game)
    orderHasGames: OrderHasGame[];

    @ManyToOne(() => Category, category => category.game)
    @JoinColumn({ name: 'category_id' })
    category: Category;

}