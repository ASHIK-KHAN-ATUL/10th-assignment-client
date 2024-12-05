// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdmkxgpamD8Ojf7_Q_RNJT7m-uoRu_HD0",
  authDomain: "assignment-10th-9f956.firebaseapp.com",
  projectId: "assignment-10th-9f956",
  storageBucket: "assignment-10th-9f956.firebasestorage.app",
  messagingSenderId: "191177230592",
  appId: "1:191177230592:web:d92373ca7d75068fe24be5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);