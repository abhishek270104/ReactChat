import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

const upload = async (file) => {
  try {
    const date = new Date().toISOString();  // Use ISO string for a consistent and sortable date format
    const storageRef = ref(storage, `images/${date}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress.toFixed(2)}% done`);
        },
        (error) => {
          console.error("Upload failed:", error);
          reject(`Something went wrong: ${error.message}`);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadURL);
          } catch (error) {
            console.error("Failed to get download URL:", error);
            reject(`Failed to get download URL: ${error.message}`);
          }
        }
      );
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    throw new Error(`Unexpected error: ${error.message}`);
  }
};
export default upload;
