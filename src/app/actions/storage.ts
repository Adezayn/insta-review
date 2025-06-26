import { getStorage, ref, uploadBytes } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

const storage = getStorage();
// const db = getFirestore();

export const uploadFileToDb = async (file: File, userId: string) => {
  try {
    // const timestamp = Date.now();
    const fileRef = ref(storage, `uploads/${userId}/${file.name}`);
    console.log("===fileRef===:", fileRef);
    // Upload file to Firebase Storage
    uploadBytes(fileRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
    }).catch(e => console.log('it failed', e));
    // await uploadBytes(fileRef, file);
    // console.log("Uploaded to path:", fileRef.fullPath);

    // // Get a downloadable URL
    // const downloadURL = await getDownloadURL(fileRef);
    // console.log("Download URL:", downloadURL);

    // return { success: true, url: downloadURL };
  } catch (error) {
    console.error("Upload failed:", error);
    return { success: false, error };
  }
};