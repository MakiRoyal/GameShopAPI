import { AppDataSource } from "./data-source"
import * as express from "express"
import Auth from "./routes/auth"
import { expressjwt as jwt } from "express-jwt"


const app = express()


AppDataSource.initialize().then(async () => {

    app.use(express.json())

    app.use(
        jwt({
            secret: "secret",
            algorithms: ["HS256"],
        }).unless({
            path: ["/auth"]
        })
    );

    app.use(Auth)


}).catch(error => console.log(error))
