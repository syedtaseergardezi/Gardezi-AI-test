import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDC8QzjSsTViBwGA-34s7Pbscyrwl3ryHY",
  authDomain: "gardezi-ai.firebaseapp.com",
  projectId: "gardezi-ai",
  storageBucket: "gardezi-ai.firebasestorage.app",
  messagingSenderId: "431472169269",
  appId: "1:431472169269:web:69fcc381af446c21c8fc7c",
  measurementId: "G-3KC2HQLZBV"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export const auth = getAuth(app);

// Initialize Analytics conditionally (only in browser)
export const initializeAnalytics = async () => {
  if (typeof window !== 'undefined') {
    const analyticsSupported = await isSupported();
    if (analyticsSupported) {
      return getAnalytics(app);
    }
  }
  return null;
};