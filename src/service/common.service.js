import { 
    getStorage, 
    ref, 
    uploadBytesResumable, 
    getDownloadURL, 
    deleteObject
} from "firebase/storage";


export const uploadImage = async (file, path) => {

    const storage = getStorage();

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

export const deleteImage = async (imageUrl) => {
    const storage = getStorage();
    const imageRef = ref(storage, imageUrl);
    // Delete the file
    await deleteObject(imageRef);
    return;
};