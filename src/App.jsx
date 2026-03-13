//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import './App.css'
import Home from './exam/Home'
import Register from  './exam/Register'
import Events from './exam/Events'
import ApiDemo from './exam/ApiDemo'
import NavBar from './exam/NavBar'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import PageNotFound from './exam/PageNotFound'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <NavBar/>

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        <Route path="/apidemo" element={<ApiDemo />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
