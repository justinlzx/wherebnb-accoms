import { ListingModel } from "../entity/listingSchema.js";
import { AppDataSource } from "../index.js";
import axios from 'axios';
import chalk from 'chalk';

export const create = async (payload) => {
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

export const getAccomsById = async (id) => {
    try {
        const result = await AppDataSource
            .createQueryBuilder()
            .select('listing')
            .from(ListingModel, 'listing')
            .where('listing.id = :id', { id })
            .getOne();

        const bookings = await axios.get(`${process.env.BOOKINGS_URL}/booking/${id}`)

        const finalResult = {
            ...result,
            bookings: bookings.data.data
        }

        return finalResult;
    } catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `GetByIdError: ${error}`;
    }
}