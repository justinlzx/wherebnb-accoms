import { AppDataSource } from '../index.js';
import Res from '../Res/response.js';

export const create = async (table, payload) => {
    try{
        const result = await AppDataSource.createQueryBuilder
            .insert()
            .into(table)
            .values(payload)
            .execute();

        return result;
    } catch (error) {
        return Res.errorResponse("Unable to create new row:", error);
    }
}