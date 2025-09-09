import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQKLoaxhWYBRnFxP6tt58T073YG1EN3mE",
  authDomain: "santhuongmai-4bcd8.firebaseapp.com",
  databaseURL: "https://santhuongmai-4bcd8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "santhuongmai-4bcd8",
  storageBucket: "santhuongmai-4bcd8.firebasestorage.app",
  messagingSenderId: "845518881097",
  appId: "1:845518881097:web:6cf1c0bee6da8e81fada98",
  measurementId: "G-G001P9ETPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)