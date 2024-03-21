import express from 'express';
import {
    createCommentController,
    getCommentController
} from '../controller/comment.controller.js';
import multer from 'multer';
import { getComment } from '../service/comment.service.js';

const upload = multer({ storage: multer.memoryStorage() });

export const commentRoutes = express.Router();

commentRoutes.post('/', createCommentController);
commentRoutes.get('/:listingId', getCommentController)

// 3000/accoms/1

//axios.get('http://localhost:3000/accoms' + '/id') 