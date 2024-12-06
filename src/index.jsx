import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH8ZHSWFelJ2ma1SxB7yu-ZTTLl6O6S_4",
    authDomain: "cpit-405-424d7.firebaseapp.com",
    projectId: "cpit-405-424d7",
    storageBucket: "cpit-405-424d7.firebasestorage.app",
    messagingSenderId: "206040724715",
    appId: "1:206040724715:web:01eddabbfe1b2603ef7aae",
    
  };

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);