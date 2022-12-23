import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from './layouts/Header'
import Home from "./views/home/Index";
import Register from './views/register/Index';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<div>about</div>} />
      </Routes>
    </>
  )
}
