import Res from '../Res/response.js';

export const createAccoms = async (req, res, next) => {
     try {
        const data = req.body;

        const result = await create(data);

        return Res.successResponse(res, result);

    } catch (error) {
        next(error);
    }
};