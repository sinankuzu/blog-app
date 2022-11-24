import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Login from "./pages/Login"
import NewBlog from './pages/NewBlog';
import Register from "./pages/Register";
const Router = () => {
  return (
  <BrowserRouter>
  <Header/>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/new-blog" element={<NewBlog/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Router