import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCgSl8P7AasP-Bh4PEVNzCx_q3shAxFBYU",
    authDomain: "cross-zero-challenge.firebaseapp.com",
    databaseURL: "https://cross-zero-challenge-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cross-zero-challenge",
    storageBucket: "cross-zero-challenge.appspot.com",
    messagingSenderId: "778912674558",
    appId: "1:778912674558:web:435c3ecd83c4dea2a46baf",
    measurementId: "G-S0G7N0ZJ1G"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
