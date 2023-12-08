// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-btventure-bcf02.firebaseapp.com",
  projectId: "mern-btventure-bcf02",
  storageBucket: "mern-btventure-bcf02.appspot.com",
  messagingSenderId: "733172926420",
  appId: "1:733172926420:web:e1c4a6eb6c238de5407841"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);