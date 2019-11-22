import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyzwMwpKWEcv_-isnU0KZqe4Cgn1z6eks",
  authDomain: "testauth-b.firebaseapp.com",
  databaseURL: "https://testauth-b.firebaseio.com",
  projectId: "testauth-b",
  storageBucket: "testauth-b.appspot.com",
  messagingSenderId: "521054843309",
  appId: "1:521054843309:web:82aaba635790d47443b124",
  measurementId: "G-6T5K5FNETC"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
