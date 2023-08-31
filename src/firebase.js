import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA5zlYRObHH28GgTmpOVsAR_sTEbS3roVc",
  authDomain: "fir-ddef9.firebaseapp.com",
  projectId: "fir-ddef9",
  storageBucket: "fir-ddef9.appspot.com",
  messagingSenderId: "506998123678",
  appId: "1:506998123678:web:587026b5e76757b63cdf8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
