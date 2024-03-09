import { EntitySchema } from "typeorm";
import { Listing } from "../model/Listing.js";


export const ListingModel = new EntitySchema({
    name: "Listing",
    target: Listing,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        createdAt: {
            type: "timestamp",
            createDate: true,
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
        },
        address: {
            type: "varchar",
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
        description: {
            type: 'text',
            nullable: true
        },
        instructions: {
            type: 'text',
            nullable: true
        },
    }
})