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
export const getAccoms = async ({ id, listingName, price, occupancy, filter}) => {

    try {
        const query = await AppDataSource.createQueryBuilder()

        if (listingName){
            query.andWhere('') //listingName LIKE '%${listingName}%'
        }

        const result = query.getMany()

        return result 
    }
    catch (error) {
        
    }

   
}

{

}