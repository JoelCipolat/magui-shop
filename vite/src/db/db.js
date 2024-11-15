import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASqZndWn29dtzHLfui1NC2KEbXLstDspc",
  authDomain: "magui-shop.firebaseapp.com",
  projectId: "magui-shop",
  storageBucket: "magui-shop.appspot.com",
  messagingSenderId: "618508256151",
  appId: "1:618508256151:web:dedc59964664c393cc3ad2"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);
export const orderCollections = collection(db, 'orders');