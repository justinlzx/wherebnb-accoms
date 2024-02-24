import { AppDataSource } from '../index.js';
import Res from '../Res/response.js';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firebaseApp } from '../index.js';

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

export const uploadImage = async (file, path) => {

    const storage = getStorage(firebaseApp);

    // Create the file metadata
    const metadata = {
        contentType: file.mimetype
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, path);
    const uploadTask = await uploadBytesResumable(storageRef, file.buffer, metadata);
    // Upload completed successfully, now we can get the download URL
    const downloadURL = await getDownloadURL(uploadTask.ref)
        console.log('File available at:', downloadURL);
        
        return downloadURL
};