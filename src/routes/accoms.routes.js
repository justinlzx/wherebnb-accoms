import express from 'express';
import {
    createAccomsController, 
    getAccomsByFilterController,
    getAllAccomsByController,
    getAllAccomsByController,
    getAccomsByIdController,
    updateAccomsController,
    getCheckinInstructionsController
} from '../controller/accoms.controller.js';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });

export const accomsRoutes = express.Router();


accomsRoutes.post('/', upload.array('images', 5), createAccomsController);
accomsRoutes.get('/', getAccomsByFilterController)
accomsRoutes.get('/', getAllAccomsByController);
accomsRoutes.get('/', getAllAccomsByController);
accomsRoutes.get('/:id', getAccomsByIdController);
accomsRoutes.put('/:id', updateAccomsController)
accomsRoutes.get('/instructions/:id', getCheckinInstructionsController)
