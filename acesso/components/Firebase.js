
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBx3K1Qj_2tXCdGHsq9FA5bWfD67jaqQ-k",
  authDomain: "acessodb-de328.firebaseapp.com",
  projectId: "acessodb-de328",
  storageBucket: "acessodb-de328.firebasestorage.app",
  messagingSenderId: "186241777417",
  appId: "1:186241777417:web:c3c38f51845b07e05e1dd8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };