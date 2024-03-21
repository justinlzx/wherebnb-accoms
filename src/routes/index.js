import express from 'express';
import { accomsRoutes } from './accoms.routes.js';


export const routes = express.Router();

routes.use('/accoms', accomsRoutes)
