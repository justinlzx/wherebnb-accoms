import { EntitySchema } from "typeorm";
import { Comment } from "../model/comment.js";


// const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
// const Comment = require("../model/comment").Comment; // import {Category} from "../model/Category";

export const CommentModel = new EntitySchema({
    name: "Comment",
    target: Comment,
    columns: {
        commentId: {
            type: "int",
            primary: "true"
        },
        listingId: {
            type: "int",
        },
        comment: {
            type: "varchar",
        },
        userId:{
            type: "varchar"
        }
    }
})