import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './assets/home'
import About from './assets/about'
import Vans from './assets/vans'
import VanDetails from './assets/vandetails'
import "./server"
import Layout from './components/layout'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Layout />} >
          <Route path= "/" element={<Home/>} />
          <Route path= "/about" element={<About/>} />
          <Route path= "/vans" element={<Vans/>} />
          <Route path= "/vans/:id" element={<VanDetails/>} />
        </Route>
      </Routes>
      <footer>Ⓒ 2022 #VANLIFE</footer>
    </BrowserRouter>
  )
}

export default App
