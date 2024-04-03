// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB11hXRoBEENh46JGtImB1u5NYesOko2JM",
  authDomain: "testdb-314b1.firebaseapp.com",
  projectId: "testdb-314b1",
  storageBucket: "testdb-314b1.appspot.com",
  messagingSenderId: "880728367807",
  appId: "1:880728367807:web:0d2d6143d37ac614bc5c0a",
  measurementId: "G-GMHB0NJRKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;