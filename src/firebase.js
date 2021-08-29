import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBHZ6zCwuWerVsKbuNucYoDY6vZ2hegm6s",
  authDomain: "reels-e8852.firebaseapp.com",
  projectId: "reels-e8852",
  storageBucket: "reels-e8852.appspot.com",
  messagingSenderId: "503952778310",
  appId: "1:503952778310:web:ec723d3f043023c1f7d647"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase;