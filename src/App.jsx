import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './assets/home'
import About from './assets/about'
import Vans from './assets/vans'
import VanDetails from './assets/vandetails'
import "./server"
import Layout from './components/layout'
import Dashboard from './assets/host/dashboard'
import Income from './assets/host/income'
import Reviews from './assets/host/reviews'
import HostLayout from './components/hostlayout'
import HostVans from './assets/host/hostvans'
import HostVanDetail from './assets/host/hostvandetail'
import HostVanInfo from './assets/host/hostvaninfo'
import HostVanPricing from './assets/host/hostvanpricing'
import HostVanPhotos from './assets/host/hostvanphotos'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<Layout />} >
          <Route index element={<Home/>} />
          <Route path= "about" element={<About/>} />
          <Route path= "vans" element={<Vans/>} />
          <Route path= "vans/:id" element={<VanDetails/>} />

          <Route path= "/host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path= "income" element={<Income/>} />
            <Route path= "vans" element={<HostVans/>} />

            <Route path= "vans/:id" element={<HostVanDetail />} >
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>

            <Route path= "reviews" element={<Reviews/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
