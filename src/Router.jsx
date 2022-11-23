import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from "./pages/Login"
const Router = () => {
  return (
  <BrowserRouter>
  <Header/>
    <Routes>
        <Route path="login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Router