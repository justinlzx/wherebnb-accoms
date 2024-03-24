import { ListingModel } from "../entity/listingSchema.js";
import { AppDataSource } from "../index.js";
import axios from 'axios';
import chalk from 'chalk';

//add new listing
export const createAccoms = async (payload) => {
    try{
        const result = await AppDataSource.createQueryBuilder()
            .insert()
            .into(ListingModel)
            .values(payload)
            .execute();

        return result;
    } catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `UploadError: ${error}`;
    }
}

//get listings by filter
export const getAccomsByFilter = async( country, maxPricePerNight, minOccupancy ) => {

    try{
        const query = AppDataSource
            .getRepository(ListingModel)
            .createQueryBuilder('listing')
            .select([
                "listing.id",
                "listing.created_at",
                "listing.name",
                "listing.hostId",
                "listing.propertyType",
                "listing.country",
                "listing.description",
                "listing.address",
                "listing.pricePerNight",
                "listing.occupancy",
                "listing.image_1",
                "listing.image_2",
                "listing.image_3",
                "listing.image_4",
                "listing.image_5",
                "listing.createdAt",
                "listing.description",
                "listing.rating"
            ])

        //if country filter is clicked
        if( country && country.length > 0 ) {
            query.andWhere("listing.country = :country", { country })
        }
        
        //if there is a price filter
        if(maxPricePerNight){
            query.andWhere("listing.pricePerNight < :pricePerNight", { pricePerNight: maxPricePerNight })
        }

        //if there is a price filter
        if(minOccupancy){
        query.andWhere("listing.occupancy >= :occupancy", { occupancy: minOccupancy })
        }

        const result = await query.getMany();

        return result

    } catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `UploadError: ${error}`;
    }
}

export const update = async (id, payload) => {
    try {
        const result = await AppDataSource
            .createQueryBuilder()
            .update(ListingModel)
            .set(payload)
            .where('id = :id', { id })
            .execute();

        return result;
    } catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `UpdateError: ${error}`;
    }
};

export const getAccomsById = async (id) => {
    try {
         const query = AppDataSource
            .getRepository(ListingModel)
            .createQueryBuilder('listing')
            .select([
               "listing.id",
                "listing.created_at",
                "listing.name",
                "listing.hostId",
                "listing.propertyType",
                "listing.country",
                "listing.description",
                "listing.address",
                "listing.pricePerNight",
                "listing.occupancy",
                "listing.image_1",
                "listing.image_2",
                "listing.image_3",
                "listing.image_4",
                "listing.image_5",
                "listing.createdAt",
                "listing.description",
                "listing.rating"
            ])
            .where('listing.id = :id', { id });

        const result = await query.getOne();

        return result;
    } catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `GetByIdError: ${error}`;
    }
}

export const getInstructions = async (id) => {
    try {
        console.log(id)
        
        const result = await AppDataSource
            .getRepository(ListingModel)
            .createQueryBuilder('listing')
            .select([
                'listing.id', 
                'listing.instructions'
            ])
            .where('listing.id = :id', { id })
            .getOne();

        return result;
    } catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `GetInstructionsError: ${error}`;
    }
};