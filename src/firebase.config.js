import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX04uIzI0YgnFtLgodKV9ZueH47vZtPhg",
  authDomain: "house-marketplace-app-4e85d.firebaseapp.com",
  projectId: "house-marketplace-app-4e85d",
  storageBucket: "house-marketplace-app-4e85d.firebasestorage.app",
  messagingSenderId: "1056058037028",
  appId: "1:1056058037028:web:267806bbcc90e071d819b1",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
