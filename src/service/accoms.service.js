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
        return `UpdateError: ${error}`;
    }
};

export const getAccomsById = async (id) => {
    try {
        const result = await AppDataSource
            .createQueryBuilder()
            .select('listing')
            .from(ListingModel, 'listing')
            .where('listing.id = :id', { id })
            .getOne();

        return result;
    } catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        return `GetByIdError: ${error}`;
    }
}

export const getInstructions = async (id) => {
    try {
        const result = await AppDataSource
            .getRepository(ListingModel)
            .createQueryBuilder('listing')
            .select([
                'listing.id', 
                'listing.instructions'
            ])
            .where('listing.id = :id', { id })
            .getOne();
            
        return result
    } catch (error) {
        return `GetInstructionsError: ${error}`;
    }
};

export const getAccomsByFilter = async( country, maxPricePerNight, minOccupancy ) => {

    try{
        const query = AppDataSource.createQueryBuilder()
            .select('listing')
            .from(ListingModel, "listing")

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
        return `UploadError: ${error}`;
    }
}