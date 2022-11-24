import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNBgr0dTBhS5-EUpkH_6hUxSInxXV0ioc",
  authDomain: "blog-app-ae3ce.firebaseapp.com",
  databaseURL:
    "https://blog-app-ae3ce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-app-ae3ce",
  storageBucket: "blog-app-ae3ce.appspot.com",
  messagingSenderId: "298516868986",
  appId: "1:298516868986:web:b4cab0ea9868b26dfc30c3",
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {})
    .catch((error) => {
      console.log(error);
    });
};
export default firebase;
