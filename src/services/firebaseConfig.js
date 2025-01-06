// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4LO6uL1SzOwzFfNJKTOCMZ2spu3E9hRI",
  authDomain: "marcial-c977c.firebaseapp.com",
  projectId: "marcial-c977c",
  storageBucket: "marcial-c977c.firebasestorage.app",
  messagingSenderId: "606072322575",
  appId: "1:606072322575:web:9e08223328e24ab37dc17a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 
export const auth = getAuth(app);