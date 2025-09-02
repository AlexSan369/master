/*
 * ARQUIVO: src/firebaseConfig.ts
 * DESCRIÇÃO: Inicializa e configura a conexão com o Firebase.
 */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // <-- IMPORTE O getAuth

// ... (firebaseConfig continua igual)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);

// Exportamos as instâncias dos serviços que vamos usar
export const db = getFirestore(app);
export const auth = getAuth(app); // <-- EXPORTE A INSTÂNCIA DO AUTH