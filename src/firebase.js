import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6Hzyw3JtBHHBxiqjVlinisLYDVGWkR80",
  authDomain: "float-and-friends.firebaseapp.com",
  projectId: "float-and-friends",
  storageBucket: "float-and-friends.firebasestorage.app",
  messagingSenderId: "240739344849",
  appId: "1:240739344849:web:a4494fae27ad2e9b0080f0",
  measurementId: "G-XT570KB575"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);