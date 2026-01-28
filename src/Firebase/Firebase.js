import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDYbOApK-QXgkVaiU5aPDSgcLcciIw4WL8",
  authDomain: "doctor-booking-chat.firebaseapp.com",
  databaseURL:
    "https://doctor-booking-chat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "doctor-booking-chat",
  storageBucket: "doctor-booking-chat.firebasestorage.app",
  messagingSenderId: "868537071432",
  appId: "1:868537071432:web:3edabb1ef2583ec11a657d",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
