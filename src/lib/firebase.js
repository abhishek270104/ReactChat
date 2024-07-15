import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqtKAoepfPc8fUQ9kEZVd2tLGt4U3hFxI",
  authDomain: "react-chat-app-9ce4a.firebaseapp.com",
  projectId: "react-chat-app-9ce4a",
  storageBucket: "react-chat-app-9ce4a.appspot.com",
  messagingSenderId: "657205287411",
  appId: "1:657205287411:web:30d40709dd9d20f94fda86",
  measurementId: "G-VTLBBBFHQ6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()