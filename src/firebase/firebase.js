// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE9y2gGwfvkfUkEAWXHY9ldZzCV0zt0Yw",
  authDomain: "newsapp-36dfd.firebaseapp.com",
  projectId: "newsapp-36dfd",
  storageBucket: "newsapp-36dfd.appspot.com",
  messagingSenderId: "5402452379",
  appId: "1:5402452379:web:f37083384e5248a5d1413e",
  measurementId: "G-1B3P4YQBNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { app, auth, db };
