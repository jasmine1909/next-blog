// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAzOo_fePtZ0z2i-feQbYgGEdefmZaR9Vg",
    authDomain: "blog-next-75475.firebaseapp.com",
    projectId: "blog-next-75475",
    storageBucket: "blog-next-75475.appspot.com",
    messagingSenderId: "30308171091",
    appId: "1:30308171091:web:2b9f93bdf832078fee35a6",
    measurementId: "G-SSLX5B25G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { auth, provider, db }