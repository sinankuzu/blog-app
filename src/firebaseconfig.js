import { initializeApp } from "firebase/app";

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

export default firebase;
