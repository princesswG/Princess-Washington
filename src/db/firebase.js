// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIQ5QpT1TTArqbX0IphXeBWC3GbrG7D30",
  authDomain: "my-portfolio-app-577c3.firebaseapp.com",
  projectId: "my-portfolio-app-577c3",
  storageBucket: "my-portfolio-app-577c3.appspot.com",
  messagingSenderId: "472313806829",
  appId: "1:472313806829:web:271c963ef0a9ade09f31e4",
  measurementId: "G-8R8Z1C30G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app);
const analytics = getAnalytics(app);