// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAP4vWMGk0jDkZ4jkPi_Y5XSlPsg3NadXM',
  authDomain: 'meal-mate-simply.firebaseapp.com',
  projectId: 'meal-mate-simply',
  storageBucket: 'meal-mate-simply.firebasestorage.app',
  messagingSenderId: '28151490238',
  appId: '1:28151490238:web:564907ece75fd7ea19e0ef',
  measurementId: 'G-LF4BE2SG6X',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Initialize Firebase Firestore
export const db = getFirestore(app);
