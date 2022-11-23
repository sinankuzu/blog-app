import React, { useState } from 'react'
import cw from "../assets/cw.jpeg"
import {useNavigate} from "react-router-dom"
import "./Header.css"


const Header = () => {
  const [show, setShow] = useState(true)

    const navigate = useNavigate()

  return (
    <div className="header-container">
      <div>
        <img width="30" height="30" src={cw} alt="" />
      </div>
      <div onClick={(e) => navigate("/home")}>{"<Sinan's/> blog"}</div>
      <div className={show ? "open":"close"} onClick={(e)=>setShow(!show)}>
        Profil Logo
        <div className="sub-menu">
          <ul>
            <li>Profile</li>
            <li>New</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header