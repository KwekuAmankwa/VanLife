import React from 'react'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Home from './assets/home'
import About from './assets/about'
import Vans, {loader as vansLoader} from './assets/vans/vans'
import VanDetails, {loader as vanDetailsLoader} from './assets/vans/vandetails'
import "./server"
import Layout from './components/layout'
import Dashboard from './assets/host/dashboard'
import Income from './assets/host/income'
import Reviews from './assets/host/reviews'
import HostLayout from './components/hostlayout'
import HostVans, {loader as hostVansLoader} from './assets/host/hostvans'
import HostVanDetail, {loader as hostVanDetailLoader} from './assets/host/hostvandetail'
import HostVanInfo from './assets/host/hostvaninfo'
import HostVanPricing from './assets/host/hostvanpricing'
import HostVanPhotos from './assets/host/hostvanphotos'
import NotFound from './assets/notfound'
import Error from './components/error'
import Login, {loader as loginLoader} from './assets/login'
import { requireAuth } from './utilities'

// 

const router = createBrowserRouter(createRoutesFromElements(
  <Route path= "/" element = {<Layout />} >
    <Route index element={<Home/>} />
    <Route path= "about" element={<About/>} />
    <Route path= "login" element={<Login />} loader={loginLoader}  />
    <Route path= "vans" element={<Vans/>} loader={vansLoader} errorElement= {<Error/>} />
    <Route path= "vans/:id" element={<VanDetails/>} loader={ vanDetailsLoader } />

    <Route path= "/host" element={<HostLayout/>}>
      <Route index element={<Dashboard/>} loader={async () => await requireAuth()} />
      <Route path= "income" element={<Income/>} loader={async () => await requireAuth()} />
      <Route path= "vans" element={<HostVans/>} loader={hostVansLoader} />

      <Route path= "vans/:id" element={<HostVanDetail />} loader={hostVanDetailLoader} >
        <Route index element={<HostVanInfo />} loader={async () => await requireAuth()} />
        <Route path="pricing" element={<HostVanPricing />} loader={async () => await requireAuth()} />
        <Route path="photos" element={<HostVanPhotos />} loader={async () => await requireAuth()} />
      </Route>

      <Route path= "reviews" element={<Reviews/>} />
    </Route>
    <Route path= "*" element={<NotFound/>} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
