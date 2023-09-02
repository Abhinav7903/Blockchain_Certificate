// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut,onAuthStateChanged,sendPasswordResetEmail,signInWithPopup,signInWithRedirect,GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getStorage ,deleteObject , ref, uploadBytes, getDownloadURL,getMetadata,listAll  } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";
import {getDatabase, ref as dbRef, push ,get,onValue,remove,child} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getFirestore, collection,setDoc, getDocs,addDoc,doc,deleteDoc,updateDoc,query,where,orderBy,limit } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5Q7XR93fW-7raAdNxakqrZlaJnwEqAvs",
  authDomain: "blockchain-7474c.firebaseapp.com",
  projectId: "blockchain-7474c",
  storageBucket: "blockchain-7474c.appspot.com",
  messagingSenderId: "707204979319",
  appId: "1:707204979319:web:54680f14be9137ed9c4472",
  measurementId: "G-9QMYG16RPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage=getStorage(app);
const database=getDatabase(app);
const firestore=getFirestore(app);


export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,collection,setDoc,doc,where,getDocs,query,firestore,onAuthStateChanged}