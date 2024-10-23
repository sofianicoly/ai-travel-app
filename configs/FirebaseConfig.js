// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeBhVK29fzWxMig_mr3SXto4waYFDRB34",
  authDomain: "travel-app-76e4d.firebaseapp.com",
  projectId: "travel-app-76e4d",
  storageBucket: "travel-app-76e4d.appspot.com",
  messagingSenderId: "905843354759",
  appId: "1:905843354759:web:c1b111274789dc9d6d9c22",
  measurementId: "G-NXNQ22836Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);