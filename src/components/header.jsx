import React from "react";
import { Link } from "react-router-dom";
import logo from "/logog.png"

export default function Header (){
    return (
        <header className="header">   
            <Link to="/"><img src={logo} alt="vanlife-logo" className="logo"/></Link>
            <nav className="navbar">
            <Link to="/host">Host</Link>
            <Link to= "/about">About</Link>
            <Link to= "/vans">Vans</Link>
            </nav>
        </header>
    )
}