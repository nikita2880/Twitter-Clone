
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-iuYEX83mZUZLu5EVC99WFzghKoR3bCA",
  authDomain: "twitter-clone-83166.firebaseapp.com",
  projectId: "twitter-clone-83166",
  storageBucket: "twitter-clone-83166.appspot.com",
  messagingSenderId: "531039122891",
  appId: "1:531039122891:web:d423ae29c642ff44afb24e",
  measurementId: "G-12CQ5G4LXH"
};

// Initialize Firebase Nikita Sharma RA2011003030244
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;