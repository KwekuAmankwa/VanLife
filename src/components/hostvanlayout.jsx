import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";


export default function HostVanLayout(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return(
        <section className="host-van-index">
            <Link 
                to=".." 
                relative="path" 
                className="back-button">
                &larr; <span>Back to all vans</span>
            </Link>

            <div className="host-van-index-wrapper">
            <Outlet />
                <nav className="host-nav-layout">
                    <NavLink
                        to="/host/vans/:id"
                        end
                        style = {({isActive}) => isActive ? activeStyles : null}
                        >
                            Details
                    </NavLink>
                    <NavLink
                        to= "/host/vans/:id/pricing"
                        style = {({isActive}) => isActive ? activeStyles : null}
                        >
                            Pricing
                    </NavLink>
                    <NavLink
                        to= "/host/vans/:id/photos"
                        style = {({isActive}) => isActive ? activeStyles : null}
                        >
                            Photos
                    </NavLink>
                </nav>
            </div>
        </section>
    )
}