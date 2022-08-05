// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBbhF-m6x--Tvb5YdJkC751PXW_qPLEmEU",
  authDomain: "webappm-9036d.firebaseapp.com",
  projectId: "webappm-9036d",
  storageBucket: "webappm-9036d.appspot.com",
  messagingSenderId: "754466801203",
  appId: "1:754466801203:web:88ea229eb1bd21c65a8546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app);