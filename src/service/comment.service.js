import { CommentModel } from "../entity/commentSchema.js";
import { AppDataSource } from "../index.js";
import chalk from 'chalk';

//writes new comment in DB
export const createComment = async (payload) => {
    try{
        const result = await AppDataSource.createQueryBuilder()
            .insert()
            .into(CommentModel)
            .values(payload)
            .execute();

        return result;
    } catch (error) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `UploadError: ${error}`;
    }
}

//get all comments by listingId (ie for one listing)
export const getComment = async ({ listingId }) => {
    console.log(`Listing ID from getComment: ${listingId}`);
    try {

        //create query builder instance
        const query = AppDataSource.createQueryBuilder()
            .select("commentTable")
            .from(CommentModel, "commentTable")
            .where("commentTable.listingId = :listingId", { listingId })
        
            console.log(`SQL Query: ${query.getSql()}`);    
        //asynchronously get data
        const result = await query.getMany()
        console.log(`Result: ${JSON.stringify(result)}`);
        return result 
    }
    catch (error ) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `UploadError: ${error}`;
    }
}

