import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from 'react';           
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3e5RbuCAidE16VOD8funGt15O4MgszfA",
  authDomain: "nezapomento-c4ce3.firebaseapp.com",
  projectId: "nezapomento-c4ce3",
  storageBucket: "nezapomento-c4ce3.appspot.com",
  messagingSenderId: "245014585097",
  appId: "1:245014585097:web:5740f09bc6b48abd90bdd8",
  measurementId: "G-JS164ZHLJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);



function App() {
  const [cities, setCities] = useState({});

  useEffect(() => {
    async function getCities(db) {
      const citiesCol = collection(db, 'cities');
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map(doc => doc.data());
      //return cityList;
      setCities(cityList);
    } 
    getCities(db);

  }, []);

 

  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
 
   
  )
}

export default App;
