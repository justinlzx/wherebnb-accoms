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
export const getComment = async ({ commentId, listingId, comment, userId, stars }) => {

    try {

        //create query builder instance
        const query = AppDataSource.createQueryBuilder()
            .select("commentTable")
            .from(CommentModel, "commentTable")
            .where("commentTable.listingId = :listingId", { listingId})
            
        //asynchronously get data
        const result = await query.getMany()
        return result 
    }
    catch (error ) {
        console.log(`${chalk.red('Error:')} ${error}`)
        throw `UploadError: ${error}`;
    }
}

