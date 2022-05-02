import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAoiBSFI-QjvVofiWsh5ZPYkK2Fx-hLYEM",
  authDomain: "linkedin-clone-933a6.firebaseapp.com",
  projectId: "linkedin-clone-933a6",
  storageBucket: "linkedin-clone-933a6.appspot.com",
  messagingSenderId: "1087722008366",
  appId: "1:1087722008366:web:58f4ea83c9f295ea1cd4bf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }