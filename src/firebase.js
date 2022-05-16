import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6ZJ_Y1JhRmbkaXj5OQQEkYjsWfVEZj28",
  authDomain: "linkedin-clone-95986.firebaseapp.com",
  projectId: "linkedin-clone-95986",
  storageBucket: "linkedin-clone-95986.appspot.com",
  messagingSenderId: "10803936549",
  appId: "1:10803936549:web:fc1a3653709ed8c69f2ecc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }