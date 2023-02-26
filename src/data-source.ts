import "reflect-metadata"
import { DataSource } from "typeorm"
import { Category } from "./entity/Category"
import { Game } from "./entity/Game"
import { Order } from "./entity/Order"
import { OrderHasGame } from "./entity/OrderHasGame"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "MakiMoka8$",
    database: "gameshopAPI",
    synchronize: true,
    logging: true,
    entities: [
        User,
        Category,
        Game,
        Order,
        OrderHasGame
    ],
    migrations: [],
    subscribers: [],
})
