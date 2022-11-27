import './App.css';
import Login from './pages/Login';
import Router from './Router';
import Register from "./pages/Register"
import { createContext, useRef } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useState } from 'react';
import { auth } from "./firebaseConfig";
import { useNavigate } from 'react-router-dom';



export const userInfo = createContext()


function App() {
  


  // It contains logged user data
  const [myUser, setMyUser] = useState()
  // const myUser = useRef()
  // Get the logged user from firebase and assing it to myUser
  const checkUser = async() => {
    const auth = getAuth();
    const user = auth.currentUser;
    setMyUser(user);
    localStorage.setItem("user", user)
    console.log(user);
  };

  return (
    <userInfo.Provider value={{checkUser, myUser, setMyUser}}>
      <Router/>
      
    </userInfo.Provider>
  );
}

export default App;
