// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7Blw1K3VEss4b4U1oVFqm1rF2sMbnhNw",
  authDomain: "mymoviebooking-db7b3.firebaseapp.com",
  projectId: "mymoviebooking-db7b3",
  storageBucket: "mymoviebooking-db7b3.appspot.com",
  messagingSenderId: "637907690578",
  appId: "1:637907690578:web:4accfe998dce44d11aeb8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };