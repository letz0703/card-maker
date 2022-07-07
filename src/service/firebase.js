import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import { getFireStore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWcvOL2ZnZCifdn806iYhqABOm9WNzDNc",
  authDomain: "business-card-maker-21fc7.firebaseapp.com",
  projectId: "business-card-maker-21fc7",
  storageBucket: "business-card-maker-21fc7.appspot.com",
  messagingSenderId: "913399558691",
  appId: "1:913399558691:web:930b702df09fc87b8a7796",
  measurementId: "G-VLYX0Y9ZMB",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
