import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCMwAGx_PMuQB-M2-4GOz-0sx6jyg5el1g",
    authDomain: "bicycle-9cecc.firebaseapp.com",
    projectId: "bicycle-9cecc",
    storageBucket: "bicycle-9cecc.appspot.com",
    messagingSenderId: "635761538096",
    appId: "1:635761538096:web:e588e1d27a6e1dca2129f5"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
