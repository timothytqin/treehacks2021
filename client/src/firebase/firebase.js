import * as firebase from "firebase";
import "firebase/app";
import "firebase/firestore";

import { firebaseConfig } from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

export default firebase;
