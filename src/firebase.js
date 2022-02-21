// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA1dLsI84PzUmggl37GjBRumkhyv3wtak",
  authDomain: "social-media-41fad.firebaseapp.com",
  projectId: "social-media-41fad",
  storageBucket: "social-media-41fad.appspot.com",
  messagingSenderId: "781718071286",
  appId: "1:781718071286:web:18ab1c859756855fde09d7",
  measurementId: "G-4WTNZVDVM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
 const auth=getAuth();
export{db,auth}