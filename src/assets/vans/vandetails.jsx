import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";


export function loader({params}){
    return getVans(params.id)
}

export default function VanDetails(){
    const location = useLocation()
    const van = useLoaderData()



    const search = location.state?.search || ""
    const locType = location.state?.type || "all"

    return(
        <div className="van-info-container">
            <div className="van-info">
                <Link 
                    to={`..${search}`} 
                    relative="path" 
                    className="back-button">
                    &larr; <span>Back to {locType} vans</span>
                </Link>
                <img src= {van.imageUrl} alt="" className="van-details-img" />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <p className="van-details-name">{van.name}</p>
                <p className="van-details-price">${van.price} <span>/day</span></p>
                <p className="van-details-desc">{van.description}</p>
                <button className="find-van btn">Rent this van</button>
            </div>    
        </div>
    )
}