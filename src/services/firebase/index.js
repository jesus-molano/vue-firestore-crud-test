import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa_fhL81iuhkpDIxtk-rsOaMoGUJ4eLKI",
  authDomain: "vue-auth-test-9896f.firebaseapp.com",
  projectId: "vue-auth-test-9896f",
  storageBucket: "vue-auth-test-9896f.appspot.com",
  messagingSenderId: "1010891411797",
  appId: "1:1010891411797:web:9ba6a304cc87e57179dfdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);