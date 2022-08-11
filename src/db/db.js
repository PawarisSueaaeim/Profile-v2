// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9y0hrDfymHgKfyOHMoUPGj1S7d5ZwbyY",
  authDomain: "my-website-reactjs.firebaseapp.com",
  projectId: "my-website-reactjs",
  storageBucket: "my-website-reactjs.appspot.com",
  messagingSenderId: "963296720124",
  appId: "1:963296720124:web:2bfb74066f61f116e71379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

// console.log({app, db});

export { db } ;