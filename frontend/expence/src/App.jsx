import React from 'react'
import { BrowserRouter, Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expence from "./pages/Dashboard/Expence";


export default function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={< Root />} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/signUp' exact element={<SignUp/>} />
          <Route path='/dashboard' exact element={<Home/>} />
          <Route path='/income' exact element={<Income/>} />
          <Route path='/expence' exact element={<Expence/>} />
        </Routes>
    </div>
  )
}

const Root = () => {
  // check token in localstorage
  const isAuthenticated = !!localStorage.getItem('token');

  // redirect dashboard otherwise login
  return isAuthenticated ? (
    <Navigate to='/dashboard' />
  ) : (
    <Navigate to="/login" />
  );
};