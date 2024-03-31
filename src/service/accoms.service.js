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

export const getAllAccoms = async () => {
    try {
        const result = await AppDataSource
            .createQueryBuilder()
            .select('listing')
            .from(ListingModel, 'listing')
            .getMany();
        return result;
    } catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `GetAllError: ${error}`;
    }
}

export const getAccomsById = async (id) => {
    try {
        const result = await AppDataSource
            .createQueryBuilder()
            .select('listing')
            .from(ListingModel, 'listing')
            .where('listing.id = :id', { id })
            .getMany();

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