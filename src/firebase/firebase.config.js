// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWQuKkSRhvKKKlpCYF4wy8I2VwZEmQn54",
  authDomain: "toyshop-9ed79.firebaseapp.com",
  projectId: "toyshop-9ed79",
  storageBucket: "toyshop-9ed79.firebasestorage.app",
  messagingSenderId: "996103430215",
  appId: "1:996103430215:web:d10322a5120d1a57c51162"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);