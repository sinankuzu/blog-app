import './App.css';
import Login from './pages/Login';
import Router from './Router';
import Register from "./pages/Register"
import { createContext } from 'react';
import { getAuth } from "firebase/auth";
import { useState } from 'react';


export const userInfo = createContext()


function App() {

  const [myUser, setMyUser] = useState()
  const checkUser = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    setMyUser(user)
    console.log(user);
  };
  return (
    <userInfo.Provider value={{checkUser, myUser}}>
      <Router/>
      
    </userInfo.Provider>
  );
}

export default App;
