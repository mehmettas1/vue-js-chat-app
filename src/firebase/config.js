import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCisBQmyiAt2FRgLMDa37suWyztFtY0_DA",
  authDomain: "blog-vue3-new.firebaseapp.com",
  projectId: "blog-vue3-new",
  storageBucket: "blog-vue3-new.appspot.com",
  messagingSenderId: "961116365060",
  appId: "1:961116365060:web:03cb3e4e794c358559b051",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
