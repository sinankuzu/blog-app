import React, { useContext, useState } from 'react'
import cw from "../assets/cw.jpeg"
import {useNavigate} from "react-router-dom"
import "./Header.css"
import {userInfo} from "../App"
import {  signOut } from "firebase/auth";
import {  auth } from "../firebaseConfig";

const Header = () => {
  
  const [show, setShow] = useState(true)
  const {myUser, setMyUser} = useContext(userInfo)
    const navigate = useNavigate()
    
    const logout = async () => {
      await signOut(auth);
      navigate("/login");
      setMyUser();
      localStorage.clear();
    };

  return (
    <div className="header-container">
      <div>
        <img width="30" height="30" src={cw} alt="" />
      </div>
      <div onClick={()=>navigate("/home")}>{"<Sinan's/> blog"}</div>
      <div className={show ? "open":"close"} onClick={(e)=>setShow(!show)}>
        Profil Logo
        <div className="sub-menu">
          <ul>
            <li>Profile</li>
            <li onClick={()=>navigate("/new-blog")}>New</li>
            {myUser ? <li onClick={logout}>Logout</li> : <li onClick={()=>navigate("/login")}>Login/Register</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header