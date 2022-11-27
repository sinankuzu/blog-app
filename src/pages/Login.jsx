import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import blog from "../assets/blok.png";
import { signInWithGoogle, auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { userInfo } from "../App";

const Login = () => {
  const { checkUser, myUser, logout } = useContext(userInfo);
  const wrongPassword = useRef("");
  const wrongEmail = useRef("");
  const disabledUser = useRef("");
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const errorDisabled =
    "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).";
  const errorEmail = "Firebase: Error (auth/user-not-found).";
  const errorPassword = "Firebase: Error (auth/wrong-password).";

  // login function
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error.message, "icersi 1");
      if (error.message === errorEmail) {
        wrongEmail.current = error.message;
      } else if (error.message === errorPassword) {
        wrongPassword.current = error.message;
      } else if (error.message === errorDisabled) {
        disabledUser.current = error.message;
      } else {
        console.log("calismadi");
      }
    }
  };

  const submitle = async () => {
    await login();

    if (wrongEmail.current !== "") {
      console.log("email sikintili");
      wrongEmail.current = "";
    } else if (wrongPassword.current !== "") {
      console.log("sifre sikintili");
      wrongPassword.current = "";
    } else if (disabledUser.current !== "") {
      console.log("engellendiniz bir kac dakika sonra tekrar deneyin");
      disabledUser.current = "";
    } else {
      await checkUser();
      console.log(`giris basarili. Aktif kullanici: ${myUser}`);

      navigate("/home");
    }
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
        <button onClick={logout}>bas</button>
      </div>
    </div>
  );
};

export default Login;
