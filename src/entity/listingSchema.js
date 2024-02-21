const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Category = require("../model/Category").Category; // import {Category} from "../model/Category";

module.exports = newEntitySchema({
    name: "Listing",
    target: Listing,
    columns: {
        listingId: {
            primary: true,
            type: "int",
        },
        name: {
            type: "varchar255",
        },
        hostId: {
            type: "int",
        },
        propertyType: {
            type: "varchar(255)",
        },
        latitude: {
            type: "float",
        },
        longitude:{
            type: "float"
        }
    }
})