// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4wIv7M7RiciFOWrKw8dGRpVqPrhxSBEo",
    authDomain: "instagram-clone-abdullahyildiz.firebaseapp.com",
    databaseURL: "https://instagram-clone-abdullahyildiz-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "instagram-clone-abdullahyildiz",
    storageBucket: "instagram-clone-abdullahyildiz.appspot.com",
    messagingSenderId: "684852632957",
    appId: "1:684852632957:web:fbd3719d0142a4f2ca4014",
    measurementId: "G-6TXX0TJ7SF"
  }); 
  

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();

export  {db, auth, storage};