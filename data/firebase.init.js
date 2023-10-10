// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmL4iItU01CRXYtS-gUCjk27KQ-sHkLH8",
  authDomain: "laravel-4ac08.firebaseapp.com",
  projectId: "laravel-4ac08",
  storageBucket: "laravel-4ac08.appspot.com",
  messagingSenderId: "397031088079",
  appId: "1:397031088079:web:87c2539f5fbe4047ff3cba",
  measurementId: "G-0MKQK9SEEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "myApp");

export default app;
