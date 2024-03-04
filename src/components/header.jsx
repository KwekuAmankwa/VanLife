import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logog.png"
import icon from "/user-icon.png"

export default function Header (){
    return (
        <header className="header">   
            <Link to="/"><img src={logo} alt="vanlife-logo" className="logo"/></Link>
            <nav className="navbar">
                <NavLink 
                to="host"
                className={({isActive}) => isActive ? "active-link" : ""}
                >
                    Host
                </NavLink>

                <NavLink 
                to= "about"
                className={({isActive}) => isActive ? "active-link" : ""}
                >
                    About           
                </NavLink>

                <NavLink 
                to= "vans"
                className={({isActive}) => isActive ? "active-link" : ""}
                >
                    Vans
                </NavLink>
                <NavLink 
                to= "login"
                className="login-link"
                >
                    <img src={icon} alt="" className="login-icon" />
                </NavLink>
            </nav>
        </header>
    )
}