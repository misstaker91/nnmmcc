// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from 'react';      
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth';
    
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUfms6j_YEPCXJdBNhEqX4BC6JwnRRs6Y",
    authDomain: "nezapo-e0477.firebaseapp.com",
    projectId: "nezapo-e0477",
    storageBucket: "nezapo-e0477.appspot.com",
    messagingSenderId: "1071675619667", 
    appId: "1:1071675619667:web:219ed68e30f66a9a2a89a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

