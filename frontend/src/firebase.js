// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyC7lbSZXj7maNCsu0EBs8pTRjnwvvgCuKg",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "zyrivo-8adc0.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "zyrivo-8adc0",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "zyrivo-8adc0.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "903657110014",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:903657110014:web:8e1ac8d18e9433fb1928af",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-TSM13KH889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth instance for Phone OTP & authentication
export const auth = getAuth(app);

// Analytics (safe check for browser environment)
let analytics = null;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    // ignore analytics error in dev/SSR
  }
}

export { analytics };
export default app;