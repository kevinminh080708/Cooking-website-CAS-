// /Js/firebase-config.js
// /Js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Firebase configuration (replace with your Firebase credentials)
const firebaseConfig = {
    apiKey: "AIzaSyA4yXY7NJp41VI-t5Enve3N5Ot9cat03ac",
    authDomain: "you-can-cook-de9be.firebaseapp.com",
    projectId: "you-can-cook-de9be",
    storageBucket: "you-can-cook-de9be.appspot.com",
    messagingSenderId: "988082351238",
    appId: "1:988082351238:web:e51ff2f136614bc8df7507",
    measurementId: "G-HLNX1FWCRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Initialize Firestore
export { db };  // Export Firestore instance