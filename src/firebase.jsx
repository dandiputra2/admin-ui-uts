import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-f38ac.firebaseapp.com",
  projectId: "store-tutorial-f38ac",
  storageBucket: "store-tutorial-f38ac.appspot.com",
  messagingSenderId: "1029528862683",
  appId: "1:1029528862683:web:8118b5474c29d810f471fe"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);