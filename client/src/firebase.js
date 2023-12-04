// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "login-ui-5192e.firebaseapp.com",
  projectId: "login-ui-5192e",
  storageBucket: "login-ui-5192e.appspot.com",
  messagingSenderId: "600564865855",
  appId: "1:600564865855:web:1ee36d2cf0fca399d9d18a",
  measurementId: "G-DMR6NTZZKW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);