import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";


export default function VanDetails(){
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },[params.id])


    const search = location.state?.search || ""

    return(
        <div className="van-info-container">
            {van ? (
                <div className="van-info">
                    <Link 
                        to={`..${search}`} 
                        relative="path" 
                        className="back-button">
                        &larr; <span>Back to all vans</span>
                    </Link>
                    <img src= {van.imageUrl} alt="" className="van-details-img" />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <p className="van-details-name">{van.name}</p>
                    <p className="van-details-price">${van.price} <span>/day</span></p>
                    <p className="van-details-desc">{van.description}</p>
                    <button className="find-van btn">Rent this van</button>
                </div>    
                ) : <h2>Loading...</h2>
            }
        </div>
    )
}