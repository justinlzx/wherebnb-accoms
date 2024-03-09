import Res from '../Res/response.js';
import { uploadImage, deleteImage } from '../service/common.service.js';
import { create, getAccomsById } from '../service/accoms.service.js';

export const createAccoms = async (req, res) => {

    // this function creates accoms and uploads images to cloud storage. if an error occurs, the images uploaded will be deleted from cloud storage
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

export const getAccomsByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getAccomsById(id);
        return Res.successResponse(res, result);
    } catch (error) {
        return Res.errorResponse(res, error);
    }
};
