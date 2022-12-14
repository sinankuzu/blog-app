import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Login from "./pages/Login"
import NewBlog from './pages/NewBlog';
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import {userInfo} from "./App"
import PrivateRoute from './PrivateRoute/PrivateRoute';
const Router = () => {
 const {myUser} = useContext(userInfo);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/home" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/new-blog" element={
            <PrivateRoute>
              <NewBlog />
            </PrivateRoute>
          }
        />
        <Route path="/profile" element={<Profile/>}/>

        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router