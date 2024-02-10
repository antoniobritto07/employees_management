import * as express from "express"
import "dotenv/config"
import { AppDataSource } from "./data-source"
import { MainSeeder } from "../seeds"
const cors = require('cors')

import { routes } from "./routes";

AppDataSource.initialize().then(async () => {
    const mainSeeder = new MainSeeder();
    mainSeeder.run()
        .then(() => {
            console.log('Seeds were run successfully');
        })
        .catch((error) => {
            console.error('Some problem happened when trying to run seeds:', error);
        });

    const app = express()
    app.use(express.json())
    app.use(cors())

    app.use(routes)

    app.listen(3000, () => {
        console.log("Express server has started on port 3000. Open http://localhost:3000 to see results")
    })


}).catch(error => console.log(error))
