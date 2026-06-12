

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyApXPdd_auL8toCxe2xzCAqUUncXCV2JVc",
  authDomain: "painel2-app.firebaseapp.com",
  projectId: "painel2-app",
  storageBucket: "painel2-app.firebasestorage.app",
  messagingSenderId: "415736714162",
  appId: "1:415736714162:web:ae13913538569edcdccaab"
}; 

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

