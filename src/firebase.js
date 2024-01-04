// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC5-3jMyz0LS-9qYuVX3tek5DniO4KJzGQ",
  authDomain: "amityhub-ff0fe.firebaseapp.com",
  projectId: "amityhub-ff0fe",
  storageBucket: "amityhub-ff0fe.appspot.com",
  messagingSenderId: "677795017648",
  appId: "1:677795017648:web:16530fec38056466d99c75",
  measurementId: "G-HRSZJW4D3Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth };