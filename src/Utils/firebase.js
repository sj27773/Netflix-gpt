// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeGNt73zM_N7KvbuUw30-XmcQVWNoNk6w",
  authDomain: "netflix-gpt-d434e.firebaseapp.com",
  projectId: "netflix-gpt-d434e",
  storageBucket: "netflix-gpt-d434e.appspot.com",
  messagingSenderId: "717018348576",
  appId: "1:717018348576:web:f8c25256654ec914351045",
  measurementId: "G-YXKXK6B519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);