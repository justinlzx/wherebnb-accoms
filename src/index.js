import express from 'express';
import { routes } from './routes/index.js';
import chalk from 'chalk';
import cors from 'cors';

const app = express();

const NODE_PORT = process.env.PORT || 3000;

app.listen(NODE_PORT, () => {
  console.log(chalk.bgGreen.white(`APP LISTENING ON PORT ${NODE_PORT}`))
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes)


