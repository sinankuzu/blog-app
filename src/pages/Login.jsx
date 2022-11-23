import React from 'react'
import "./Login.css"
import blog from "../assets/blok.png"
const Login = () => {

    const submitle = () =>{
        
    }
  return (
    <div className="wrapper">
      <form className="container" action="">
        <div className="login-first">
          <img src={blog} alt="" />
          <div className="login-header">
            <h1>LOGIN</h1>
          </div>
        </div>
        <label htmlFor="">Username</label>
        <input type="text" onChange={(e) => e.target.value} />
        <label htmlFor="">Password</label>
        <input type="password" onChange={(e) => e.target.value} />
        <div className="button" onClick={submitle}>Login</div>
        <div className="button">Sign-in with google</div>
      </form>
    </div>
  );
}

export default Login