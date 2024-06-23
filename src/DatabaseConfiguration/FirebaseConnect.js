

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9mFskW-Y16O7POisNp5gPVcKtpSg1ZZc",
  authDomain: "chatting-application-56e44.firebaseapp.com",
  projectId: "chatting-application-56e44",
  storageBucket: "chatting-application-56e44.appspot.com",
  messagingSenderId: "142369855793",
  appId: "1:142369855793:web:55965bfbd0dd87741b7810"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

console.log("firebase connection");