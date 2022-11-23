import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Login from "./pages/Login"
import NewBlog from './pages/NewBlog';
const Router = () => {
  return (
  <BrowserRouter>
  <Header/>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/new-blog" element={<NewBlog/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Router