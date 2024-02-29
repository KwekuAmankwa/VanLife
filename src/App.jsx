import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './assets/home'
import About from './assets/about'
import logo from "/logog.png"




function App() {
  return (
    <BrowserRouter>
      <header className="header">   
        <Link to="/"><img src={logo} alt="vanlife-logo" className="logo"/></Link>
        <nav className="navbar">
          <Link to= "/about">About</Link>
          {/* <Link to= "/">Vans</Link> */}
        </nav>
      </header>
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/about" element={<About/>} />
      </Routes>
      <footer>Ⓒ 2022 #VANLIFE</footer>
    </BrowserRouter>
  )
}

export default App