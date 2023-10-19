// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "mern-estate-1.firebaseapp.com",
	projectId: "mern-estate-1",
	storageBucket: "mern-estate-1.appspot.com",
	messagingSenderId: "123978977153",
	appId: "1:123978977153:web:9a7f2e49fa618205212280",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
