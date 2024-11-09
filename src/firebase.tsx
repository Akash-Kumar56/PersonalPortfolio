
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBGlC7rcQo0y2uoF2qOI7oiRDrR1yrMy38",
  authDomain: "portfolio-5f85c.firebaseapp.com",
  projectId: "portfolio-5f85c",
  storageBucket: "portfolio-5f85c.firebasestorage.app",
  messagingSenderId: "648917704446",
  appId: "1:648917704446:web:180e19ee200d5143230faf",
  measurementId: "G-KJ9W61C1EX"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
