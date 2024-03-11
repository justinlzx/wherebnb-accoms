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
        .select("listingTable")
        .from(ListingModel, "listingTable")

         // Log the SQL query
         console.log(`SQL Query: ${query.getSql()}`);

        const result = await query.getMany();
        //Log result
        console.log(`Result: ${JSON.stringify(result)}`);
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

//get listings by filter
export const getAccomsByFilter = async( country, maxPricePerNight ) => {
    console.log(country, maxPricePerNight)
    try{
        const query = AppDataSource.createQueryBuilder()
            .select('listing')
            .from(ListingModel, "listing")

        //if country filter is clicked
        if( country && country.length > 0 ) {
            query.where("listing.country = :country", { country })
            console.log("country should execute")
        }
        //if there is a price filter
        if(maxPricePerNight){
            query.andWhere("listing.pricePerNight < :pricePerNight", { pricePerNight: maxPricePerNight })
            console.log("PPN executes")
        }
        console.log(`SQL Query: ${query.getSql()}`);
        const result = await query.getMany();

        return result

    } catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `UploadError: ${error}`;
    }
}

