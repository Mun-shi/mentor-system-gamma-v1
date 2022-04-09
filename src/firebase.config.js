// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore" // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Uwq-oUweIrxqltYQ4Q9bWKOGpsU0b_0",
  authDomain: "mentor-61921.firebaseapp.com",
  projectId: "mentor-61921",
  storageBucket: "mentor-61921.appspot.com",
  messagingSenderId: "955747965952",
  appId: "1:955747965952:web:0ba9cc0c7039162ae3cce5",
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
