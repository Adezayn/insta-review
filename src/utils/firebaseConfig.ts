// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKml6llJefMO4LIilfK11etveil0qJm4U",
  authDomain: "instagram-vendors-review.firebaseapp.com",
  projectId: "instagram-vendors-review",
  storageBucket: "instagram-vendors-review.firebasestorage.app",
  messagingSenderId: "521299807003",
  appId: "1:521299807003:web:f5bf3461ce0cb9a25c61be",
  measurementId: "G-14WKE314EE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// const analytics = getAnalytics(app);
