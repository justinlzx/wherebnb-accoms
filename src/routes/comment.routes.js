import express from 'express';
import {
    createCommentController
} from '../controller/comment.controller.js';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });

export const commentRoutes = express.Router();

commentRoutes.post('/', createCommentController);
commentRoutes.get('/:listingId')

// 3000/accoms/1

//axios.get('http://localhost:3000/accoms' + '/id') 