// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn78tR55LmJfiaODDLBa1tvYzC9fF9e7o",
  authDomain: "select-your-plan.firebaseapp.com",
  projectId: "select-your-plan",
  storageBucket: "select-your-plan.appspot.com",
  messagingSenderId: "355666881347",
  appId: "1:355666881347:web:9114963d62b67511efddf6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
