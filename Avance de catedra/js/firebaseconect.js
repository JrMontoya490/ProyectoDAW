
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADMnIHPm9rshjOE91F3-XNsh0p7thJQWQ",
  authDomain: "proyectodaw-63e23.firebaseapp.com",
  databaseURL: "https://proyectodaw-63e23-default-rtdb.firebaseio.com",
  projectId: "proyectodaw-63e23",
  storageBucket: "proyectodaw-63e23.appspot.com",
  messagingSenderId: "40309980971",
  appId: "1:40309980971:web:066eb99dcc3adb346ccf6e",
  measurementId: "G-XW1PFJ8CLW"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Obtén la instancia de Firestore

console.log("Conexión a Firebase establecida correctamente.");
