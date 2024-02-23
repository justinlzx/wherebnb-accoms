import express from 'express';
import * as accomsController from '../controller/accoms.controller.js';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

export const accomsRoutes = express.Router();

accomsRoutes.post('/', upload.array(5), accomsController.createAccoms);