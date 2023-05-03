// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDde2hrMmRSlcR8jsCKyH_Lt-1C0nc4hRQ",
    authDomain: "bengali-food-b637e.firebaseapp.com",
    projectId: "bengali-food-b637e",
    storageBucket: "bengali-food-b637e.appspot.com",
    messagingSenderId: "486959217650",
    appId: "1:486959217650:web:3d2f00659d825d53cdc96b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;