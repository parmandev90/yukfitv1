// src/scripts/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Copy dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBAqtJSGSSkcrKHpu1EQ2qLwCjRBgbWoMk",
  authDomain: "yuk-fit.firebaseapp.com",
  projectId: "yuk-fit",
  storageBucket: "yuk-fit.appspot.com",
  messagingSenderId: "871356773078",
  appId: "1:871356773078:web:cb48742b746ce377cd4f77",
  measurementId: "G-8NHEP5JNVG" // opsional
};

// ✅ Inisialisasi App Firebase
const app = initializeApp(firebaseConfig);

// ✅ Siapkan Modul Auth & Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
