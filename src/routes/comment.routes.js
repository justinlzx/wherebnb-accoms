import express from 'express';
import {
    createComment
} from '../controller/comment.controller.js';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });

export const commentRoutes = express.Router();

commentRoutes.post('/', createComment);
commentRoutes.get('/:accomId')

// 3000/accoms/1

//axios.get('http://localhost:3000/accoms' + '/id') 