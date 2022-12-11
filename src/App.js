import './App.css';
import Login from './pages/Login';
import Router from './Router';
import Register from "./pages/Register"
import { createContext, useRef, useEffect } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useState } from 'react';
import { auth } from "./firebaseConfig";
import { useNavigate } from 'react-router-dom';



export const userInfo = createContext()


function App() {

  const [myUser, setMyUser] = useState();
  const [accessToken, setAccessToken] = useState();
  
  useEffect(() => {
    
      const loggedInUser = localStorage.getItem("user");
      const loggedAccessToken =  localStorage.getItem("accessToken");

      if (loggedAccessToken) {
        setMyUser(loggedInUser);
      }
  
  console.log(loggedAccessToken)

  console.log("naber")
  
    
  }, [myUser])
  


  // It contains logged user data
  
  // Get the logged user from firebase and assing it to myUser
  const checkUser = async() => {
    const auth = getAuth();
    const user = auth.currentUser;
    setMyUser(user.email);
    setAccessToken(user.accessToken)
    localStorage.setItem("user", user.email)
    localStorage.setItem("accessToken", user.accessToken);
  };

  return (
    <userInfo.Provider value={{checkUser, myUser, setMyUser}}>
       <Router/> 
      
    </userInfo.Provider>
  );
}

export default App;
