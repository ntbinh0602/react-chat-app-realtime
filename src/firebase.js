import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Create a root reference

const firebaseConfig = {
  apiKey: "AIzaSyBtIoCgf-N--JWBTxqRuBcFi0RDPNQVK2E",
  authDomain: "chatapp-90340.firebaseapp.com",
  projectId: "chatapp-90340",
  storageBucket: "chatapp-90340.appspot.com",
  messagingSenderId: "1039366818984",
  appId: "1:1039366818984:web:14226cffb59dae8eb3469d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
