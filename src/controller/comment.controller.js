import Res from '../Res/response.js';
import { uploadImage, deleteImage } from '../service/common.service.js';
import { create, getComment } from '../service/comment.service.js';

export const createComment = async (req, res) => {

    // 
    try {
        const images = req.files;
        const imageUrls = await Promise.all(images.map(async (image) => {
            const imageUrl = await uploadImage(image, `${image.originalname}`);
            return imageUrl;
        }));

        try {
        const data = req.body;

        const payload = {
                ...data,
                images_1: imageUrls[0] || null,
                images_2: imageUrls[1] || null,
                images_3: imageUrls[2] || null,
                images_4: imageUrls[3] || null,
                images_5: imageUrls[4] || null
        }

        const result = await create(payload);

        return Res.successResponse(res, result);
    } catch (error) {
        await Promise.all(imageUrls.map(async (imageUrl) => {
            if (imageUrl) {
                await deleteImage(imageUrl)
                .then(() => {
                    console.log('Firebase Image deleted');
                })
                .catch((error) => {
                    console.log('Error deleting image', error);
                });
            }
        }));
        return Res.errorResponse(res, error)
    }
    } catch (error) {
        return Res.errorResponse(res, error)
    }
};

export const getAccomsByFilter = async(req, res) => {
    // call some service 

    const { 
        name, 
        price,
        occupancy
    } = req.body // req.query 

    const { id } = req.query

    const payload = {

    }

    const result = await getAccoms(payload)

    return result
}
