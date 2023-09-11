// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkLRPxIStSHLGGNcBTM8TfSTti334pqmA",
  authDomain: "solent-ride-share.firebaseapp.com",
  projectId: "solent-ride-share",
  storageBucket: "solent-ride-share.appspot.com",
  messagingSenderId: "518574062522",
  appId: "1:518574062522:web:a3416489d0c90fc7dbfb83",
  measurementId: "G-CWTBTWC4QB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize Firebase Authentication and get reference service

const auth = getAuth(app);
export { auth };
