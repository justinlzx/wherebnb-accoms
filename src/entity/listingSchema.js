import { EntitySchema } from "typeorm";
import { Listing } from "../model/listing.js";



// const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
// const Listing = require("../model/listing").Listing; // import {Category} from "../model/Category";

export const ListingModel = new EntitySchema({
    name: "Listing",
    target: Listing,
    columns: {
        listingId: {
            primary: true,
            type: "int",
        },
        name: {
            type: "varchar",
        },
        hostId: {
            type: "int",
        },
        propertyType: {
            type: "varchar",
        },
        latitude: {
            type: "float",
        },
        longitude:{
            type: "float"
        }
    }
})