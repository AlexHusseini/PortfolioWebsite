// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhHpY1a_IdXXstXg4JnW5gu8lM9oEcQII",
  authDomain: "portfolio-d040a.firebaseapp.com",
  projectId: "portfolio-d040a",
  storageBucket: "portfolio-d040a.firebasestorage.app",
  messagingSenderId: "1038393976414",
  appId: "1:1038393976414:web:cb66ee386513fce2c236cf",
  measurementId: "G-WM4HDB120T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 