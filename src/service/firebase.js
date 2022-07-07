import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";

const firebaseConfig = {
  apiKey: procss.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: procss.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: procss.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
