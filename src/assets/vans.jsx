import React, { useEffect, useState } from "react";
import { Link, json } from "react-router-dom"



export default function Vans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch("api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[])

    const allVans = vans.map(van => (
        <div key={van.id} className="van-card">
            <div className="card-image">
                <img src={van.imageUrl} alt="" className="van-image"/>
            </div>
            <div className="van-details">
                <p>{van.name}</p>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>   
        </div>
    ))

    return(
      <div className="vans-container">
        <h1>Explore our van options</h1>
        <div className="container-grid"> 
            {allVans}
        </div>
      </div>
    )
}
