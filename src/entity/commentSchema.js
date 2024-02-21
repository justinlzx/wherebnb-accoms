const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Category = require("../model/Category").Category; // import {Category} from "../model/Category";

module.exports = newEntitySchema({
    name: "Listing",
    target: Listing,
    columns: {
        commentId: {
            type: "int",
            primary: "true"
        },
        listingId: {
            type: "int",
        },
        comment: {
            type: "varchar(255)",
        },
        userId:{
            type: "varchar(255)"
        }
    }
})