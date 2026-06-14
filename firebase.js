import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAHY_MyHcPvgNgDRD-NMCprA8IDn94oYY",
  authDomain: "diplomas-d9f5d.firebaseapp.com",
  projectId: "diplomas-d9f5d",
  storageBucket: "diplomas-d9f5d.firebasestorage.app",
  messagingSenderId: "465325614976",
  appId: "1:465325614976:web:8893495075344923fdc365"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);