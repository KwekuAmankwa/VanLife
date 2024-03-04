import React from "react";
import { useLoaderData} from "react-router-dom";
import { Link, NavLink, Outlet } from "react-router-dom";
import { getHostVans } from "../../api";


export function loader({params}){
    return getHostVans(params.id)
}

export default function HostVanDetail(){

    const van = useLoaderData()


    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }


    return (
        <>
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
                    <Outlet context= {{ van }}/>
                </div>
            </section>
        </>
    )
}