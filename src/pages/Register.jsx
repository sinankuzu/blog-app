import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import blog from "../assets/blok.png"
import {signInWithGoogle, auth} from "../firebaseConfig"
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
const Login = () => {

  const navigate = useNavigate()

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  
    const submitle = () =>{
        register()
        navigate("/home")
    }
  return (
    <div className="wrapper">
      <div className="login-container">
        <div className="login-first">
          <img src={blog} alt="" />
          <div className="login-header">
            <h1>LOGIN</h1>
          </div>
        </div>
        <label htmlFor="">Email</label>
        <input type="text" onChange={(e) => setRegisterEmail(e.target.value)} />
        <label htmlFor="">Password</label>
        <input
          type="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <div className="button" onClick={submitle}>
          Register
        </div>
        <div onClick={signInWithGoogle} className="button">
          Sign-in with google
        </div>
      </div>
    </div>
  );
}

export default Login