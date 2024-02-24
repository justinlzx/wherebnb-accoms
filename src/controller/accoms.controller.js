import Res from '../Res/response.js';
import { create, uploadImage } from '../service/common.service.js';

export const createAccoms = async (req, res, next) => {
     try {
        const data = req.body;

        const images = req.files;
        const imageUrls = await Promise.all(images.map(async (image) => {
            const imageUrl = await uploadImage(image, `accoms/${image.originalname}`);
            return imageUrl;
        }));

        console.log('imageUrls', imageUrls);

        const result = await create({
            table: 'accoms',
            payload: {
                ...data,
                images_1: imageUrls
            }
        });

        return Res.successResponse(res, result);

    } catch (error) {
        next(error);
    }
};