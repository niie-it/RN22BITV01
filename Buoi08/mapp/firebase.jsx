import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCeAy1mBY-Md3-rvsH06I3APtbt1Jswv-Q",
  authDomain: "rn22bitv01.firebaseapp.com",
  projectId: "rn22bitv01",
  storageBucket: "rn22bitv01.firebasestorage.app",
  messagingSenderId: "301629711842",
  appId: "1:301629711842:web:9fa2c8bb2db8deb06dc5bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
