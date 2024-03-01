import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header.jsx"
import Footer from "./footer.jsx";

export default function Layout(){
    return(
        <>
            <div className="site-wrapper">
                <Header />
                <div className="headout">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}