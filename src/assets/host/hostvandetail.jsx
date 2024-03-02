import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function HostVanDetail(){

    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },[params.id])

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }


    return (
        <>
            { van ? 
                (
                    <section className="host-van-index">
                        <Link 
                            to=".." 
                            relative="path" 
                            className="back-button">
                            &larr; <span>Back to all vans</span>
                        </Link>
                        <div className="host-van-index-wrapper">
                            <div className="host-van-initial">
                                <div className="host-van-index-image">
                                    <img src= {van.imageUrl} alt="" />    
                                </div>
                                <div className="host-van-index-details">
                                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                                    <p className="host-van-index-name">{van.name}</p>
                                    <p className="host-van-index-price">${van.price} <span>/day</span> </p>
                                </div>
                            </div>
                            <nav className="host-nav-layout">
                                <NavLink
                                    to= "."
                                    end 
                                    style = {({isActive}) => isActive ? activeStyles : null}
                                    >
                                        Details
                                </NavLink>
                                <NavLink
                                    to= "pricing"
                                    style = {({isActive}) => isActive ? activeStyles : null}
                                    >
                                        Pricing
                                </NavLink>
                                <NavLink
                                    to= "photos"
                                    style = {({isActive}) => isActive ? activeStyles : null}
                                    >
                                        Photos
                                </NavLink>
                            </nav>
                            <Outlet />
                        </div>
                    </section>
                    
                ) 
            : 
                (<h2>Loading...</h2>  )}
        </>
    )
}