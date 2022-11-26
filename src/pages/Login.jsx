import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import blog from "../assets/blok.png";
import { signInWithGoogle, auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
const Login = () => {
  const wrongPassword = useRef("");
  const wrongEmail = useRef("");
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const mylogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error.message, "icersi 1");
      if (error.message === `Firebase: Error (auth/user-not-found).`) {
        // setWrongEmail(error.message);
        wrongEmail.current = error.message;
      } else if (error.message === `Firebase: Error (auth/wrong-password).`) {
        //  setWrongPassword(error.message);
        wrongPassword.current = error.message;
      } else {
        console.log("calismadi");
      }
      //  console.log(wrongEmail,"icerisi 2",wrongPassword)
      //  console.log(we, "icerisi 2", wp);
    }

    // console.log(wrongEmail,"boslu1", wrongPassword);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const submitle = async () => {
    await mylogin();
    // console.log(wrongEmail, "boslu2", wrongPassword);

    if (wrongEmail.current !== "") {
      console.log("email sikintili");
    } else if (wrongPassword.current !== "") {
      console.log("sifre sikintili");
    }
    // console.log(we, "icerisi 2", wp);

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
