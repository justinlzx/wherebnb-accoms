import { EntitySchema } from "typeorm";
import { Listing } from "../model/Listing.js";


export const ListingModel = new EntitySchema({
    name: "Listing",
    target: Listing,
    columns: {
        listingId: {
            generated: true,
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
        country:{
            type: "varchar"
        },
        description:{
            type: "varchar"
        },
        latitude: {
            type: "float",
        },
        longitude:{
            type: "float"
        },
        address: {
            type: "varchar",
        },
        pricePerNight:{
            type: "int"
        },
        image_1: {
            type: "varchar",
            nullable: true
        },
        image_2: {
            type: "varchar",
            nullable: true
        },
        image_3: {
            type: "varchar",
            nullable: true
        },
        image_4: {
            type: "varchar",
            nullable: true
        },
        image_5: {
            type: "varchar",
            nullable: true
        },
        //add in created at 
        createdAt: {
            name: "created_at",
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
        }
    }
})