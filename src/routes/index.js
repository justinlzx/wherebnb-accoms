import express from 'express';
import { accomsRoutes } from './accoms.routes.js';
import { commentRoutes } from './comment.routes.js'


export const routes = express.Router();

routes.use('/accoms', accomsRoutes)
routes.use('/comment', commentRoutes)