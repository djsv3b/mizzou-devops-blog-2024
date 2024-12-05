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
  apiKey: "AIzaSyCaZF9H_-cpCkhZ4vljNvk4aAywGpD3ROM",
  authDomain: "final-4990.firebaseapp.com",
  projectId: "final-4990",
  storageBucket: "final-4990.firebasestorage.app",
  messagingSenderId: "616342104126",
  appId: "1:616342104126:web:947f6b82a3efc426ae096f",
  measurementId: "G-BM7EWB8HBB"
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

