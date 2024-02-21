import express from 'express';
import { routes } from './routes/index.js';
import chalk from 'chalk';
import cors from 'cors';
import dotenv from 'dotenv'
import { DataSource } from "typeorm"
import  { dbConfig } from '../ormconfig.js';


dotenv.config()

const app = express();

const NODE_PORT = process.env.PORT || 3000;

console.log(dbConfig)
const AppDataSource = new DataSource(dbConfig)

AppDataSource.initialize()
    .then(() => {
        app.listen(NODE_PORT, async () => {
          console.log(chalk.bgGreen.white(`CONNECTED TO DB AND APP LISTENING ON PORT ${NODE_PORT}`))
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes)


