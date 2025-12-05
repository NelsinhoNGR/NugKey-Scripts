// firebase-config.js
// Coloque aqui o firebaseConfig que o painel do Firebase te deu

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-32eI6wB5St-8n7krA9JZYdXdOmDQWg8",
  authDomain: "nugkey-scripts.firebaseapp.com",
  projectId: "nugkey-scripts",
  storageBucket: "nugkey-scripts.firebasestorage.app",
  messagingSenderId: "750447436200",
  appId: "1:750447436200:web:2b499d2e622bdc78187d9d"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
