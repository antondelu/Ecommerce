import firebase from "firebase";
import '@firebase/firestore'
const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyD4Z1GrIoV2z43tv5QVfvRY9fxrw9Zw5Z0",
    authDomain: "productosreact.firebaseapp.com",
    projectId: "productosreact",
    storageBucket: "productosreact.appspot.com",
    messagingSenderId: "577761865175",
    appId: "1:577761865175:web:040afc565e9fefea682f92",
    measurementId: "G-Z8G8469VB7"
  });

  export const getFirebase = ()=> {
     return  firebaseConfig
  }
   
  export const getFirestore = ()=>{
      return firebase.firestore(firebaseConfig)
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);