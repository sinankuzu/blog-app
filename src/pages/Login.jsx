import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import blog from "../assets/blok.png";
import { signInWithGoogle, auth } from "../firebaseConfig";
import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const Login = () => {

  const [wrongPasword, setWrongPassword] = useState()
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      setWrongPassword(error.message)
      console.log(error.message, "burasi");
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  const submitle = () => {
    if(wrongPasword !==""){
      
    }
    login();

    // navigate("/home");
  };
  return (
    <div className="wrapper">
      <div className="login-container">
        <div className="login-first">
          <img src={blog} alt="" />
          <div className="login-header">
            <h1>LOGIN</h1>
          </div>
        </div>
        <label htmlFor="">Username</label>
        <input type="text" onChange={(e) => setLoginEmail(e.target.value)} />
        <label htmlFor="">Password</label>
        <input
          type="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <div className="button" onClick={submitle}>
          Login
        </div>
        <div onClick={signInWithGoogle} className="button">
          Sign-in with google
        </div> 
      </div>
    </div>
  );
};

export default Login;
