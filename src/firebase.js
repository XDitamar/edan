// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFnpQ4poA2HoNGqi0X3cns-uzyJ2NKumM",
  authDomain: "stringvibeschat.firebaseapp.com",
  projectId: "stringvibeschat",
  storageBucket: "stringvibeschat.appspot.com",
  messagingSenderId: "245664494375",
  appId: "1:245664494375:web:29646848a8d3ca8122af02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();