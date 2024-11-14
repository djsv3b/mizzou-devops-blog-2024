// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported  } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzamy8hQz73jKHtWPPCyusFTZq2KDCxCs",
  authDomain: "blog-projec-7051a.firebaseapp.com",
  projectId: "blog-projec-7051a",
  storageBucket: "blog-projec-7051a.appspot.com",
  messagingSenderId: "573295450818",
  appId: "1:573295450818:web:2d0e246c88fde9ab7f795b",
  measurementId: "G-FEX77NERX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//set up firebase authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
//set up firebase database
export const db = getFirestore(app);

isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  }
});

