import { EntitySchema } from "typeorm";
import { Comment } from "../model/Comment.js";


export const CommentModel = new EntitySchema({
    name: "Comment",
    target: Comment,
    columns: {
        commentId: {
            type: "int",
            primary: true,
            generated: true
        },
        listingId: {
            type: "int",
        },
        comment: {
            type: "varchar",
        },
        userId:{
            type: "int"
        }
    }
})