import Res from '../Res/response.js';
import { uploadImage, deleteImage } from '../service/common.service.js';
import { createAccoms, getAccoms, getAccomsByFilter } from '../service/accoms.service.js';

export const createAccomsController = async (req, res) => {

    // this function creates accoms and uploads images to cloud storage. if an error occurs, the images uploaded will be deleted from cloud storage
    try {
        const images = req.files;
        const imageUrls = await Promise.all(images.map(async (image) => {
            const imageUrl = await uploadImage(image, `${image.originalname}`); //this works and prints the "file available at URL"
            console.log(imageUrl.length)
            return imageUrl;
            
            
        
        }));
        console.log(imageUrls)
        
        try {
        const data = req.body;
        console.log("second block")
        const payload = {
                ...data,
                image_1: imageUrls[0] || null,
                image_2: imageUrls[1] || null,
                image_3: imageUrls[2] || null,
                image_4: imageUrls[3] || null,
                image_5: imageUrls[4] || null
        }
        console.log(payload)
        
        const result = await createAccoms(payload);

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

export const getAccomsController = async(req, res) => {
    // call some service 

    // const { 
    //     name, 
    //     price,
    //     occupancy
    // } = req.body // req.query 
    try {
        const result = await getAccoms()
        res.json(result);
    } catch (error) {
        return Res.errorResponse(res, error)
    }
}

export const getAccomsByFilterController = async(req, res) => {
    const {
        country,
        pricePerNight
    } = req.query
    console.log(country, pricePerNight)

    try {
        const result = await getAccomsByFilter(country, pricePerNight)
        res.json(result)
    } catch (error) {
        return Res.errorResponse(res, error)
    }
}
