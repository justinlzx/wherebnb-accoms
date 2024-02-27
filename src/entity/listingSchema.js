import { EntitySchema } from "typeorm";
import { Listing } from "../model/Listing.js";


export const ListingModel = new EntitySchema({
    name: "Listing",
    target: Listing,
    columns: {
        listingId: {
            primary: true,
            type: "int",
            generated: true
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