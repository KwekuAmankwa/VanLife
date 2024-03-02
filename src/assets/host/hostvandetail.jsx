import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function HostVanDetail(){

    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },[params.id])


    return (
        <>
            { van ? 
                (
                    
                    
                    
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
                    
                    
                ) 
            : 
                (<h2>Loading...</h2>  )}
        </>
    )
}