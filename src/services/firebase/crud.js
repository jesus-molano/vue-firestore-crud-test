import { collection, addDoc } from "firebase/firestore";
import { db } from '@/services/firebase';

export const addNewActivity = async (newActivity) => {
  try {
    const docRef = await addDoc(collection(db, "activities"), newActivity);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
