import firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore };
