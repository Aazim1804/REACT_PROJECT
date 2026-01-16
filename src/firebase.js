// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzZsvpApco-iww5Bv88XlOWgmk_ZxbL38",
  authDomain: "restocabana-f392a.firebaseapp.com",
  projectId: "restocabana-f392a",
  storageBucket: "restocabana-f392a.firebasestorage.app",
  messagingSenderId: "142080203249",
  appId: "1:142080203249:web:554ba050c8280655338c50"
};

const app = initializeApp(firebaseConfig);

// Initialize and export for use in components
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();