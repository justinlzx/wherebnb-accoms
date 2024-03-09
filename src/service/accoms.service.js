import { ListingModel } from "../entity/listingSchema.js";
import { AppDataSource } from "../index.js";
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

//get all listings
// export const getAccoms = async ({ id, listingName, price, occupancy, filter}) => {
export const getAccoms = async () => {
    try {
        const query = await AppDataSource.createQueryBuilder()
        const result = await query.getMany();
        return result
        // if (listingName){
        //     query.andWhere('') //listingName LIKE '%${listingName}%'
        // }
    }
    catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `UploadError: ${error}`;
    }
}

//get listings by filtered values
