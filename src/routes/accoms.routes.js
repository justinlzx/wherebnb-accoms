import express from 'express';
import {
    createAccomsController, getAccomsController, getAccomsByFilterController
} from '../controller/accoms.controller.js';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });

export const accomsRoutes = express.Router();

accomsRoutes.post('/', upload.array('images', 5), createAccomsController);
accomsRoutes.get('/', getAccomsController)
accomsRoutes.get('/filter', getAccomsByFilterController)

// 3000/accoms/1

//axios.get('http://localhost:3000/accoms' + '/id') 