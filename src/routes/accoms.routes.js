import express from 'express';
import {
    createAccoms
} from '../controller/accoms.controller.js';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });

export const accomsRoutes = express.Router();

accomsRoutes.post('/', upload.array('images', 5), createAccoms);