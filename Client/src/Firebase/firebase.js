import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKazKolOUepH5wTUWv9SUeH1WfU3YmOqg",
  authDomain: "cfms-493ab.firebaseapp.com",
  projectId: "cfms-493ab",
  storageBucket: "cfms-493ab.appspot.com",
  messagingSenderId: "270529033970",
  appId: "1:270529033970:web:7c4f3b7e9b0363caf2c26b",
  measurementId: "G-1GYVS2BHRQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
