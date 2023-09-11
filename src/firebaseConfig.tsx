import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBnTO9PgpfLcClGbu--wo_WKCzeg8CvQZA",
  authDomain: "drive-5d903.firebaseapp.com",
  projectId: "drive-5d903",
  storageBucket: "drive-5d903.appspot.com",
  messagingSenderId: "816623463402",
  appId: "1:816623463402:web:e207dd9a3f6811b1c4a093",
  measurementId: "G-DM74K1RJ88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
export const database=getFirestore(app)

