import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../api";



export default function Vans() {
    const [vans, setVans] = useState([])
    const [Loading, setLoading] =useState(false)

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    // useEffect(() => {
    //     fetch("api/vans")
    //     .then(res => res.json())
    //     .then(data => setVans(data.vans))
    // },[])

    useEffect(() => {
        async function loadVans(){
            setLoading(true)
            const data = await getVans()
            setVans(data)
            setLoading(false)
        }
        loadVans()
    },[])



    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const lowerType = typeFilter ? typeFilter.toLowerCase() : ""

    const allVans = displayedVans.map(van => (
        <div key={van.id} className="van-card">
            <Link 
                to= {van.id} 
                state={{ 
                    search: `?${searchParams.toString()}`,
                    type: `${lowerType}` }} 
                className="van-link">
                    <div className="card-image">
                        <img src={van.imageUrl} alt="" className="van-image"/>
                    </div>
                    <div className="van-details">
                        <p>{van.name}</p>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>  
            </Link> 
        </div>
    ))




    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }



    if (Loading){
        return (
            <h1>Loading...</h1>
        )
    }


    return(
      <div className="vans-container">
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
            <button 
                onClick={() => handleFilterChange("type", "Simple")}
                className= {`van-type Simple ${typeFilter === "Simple" ? "selected" : ""}`}>
                    Simple
            </button>
            <button
                onClick={() => handleFilterChange("type", "Luxury")}
                className= {`van-type Luxury ${typeFilter === "Luxury" ? "selected" : ""}`}>
                    Luxury
            </button>
            <button
                onClick={() => handleFilterChange("type", "Rugged")}
                className= {`van-type Rugged ${typeFilter === "Rugged" ? "selected" : ""}`}>
                    Rugged
            </button>
            {
                typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="clear-filters">
                            Clear filters
                    </button>
                ) : null
            }
        </div>
        <div className="container-grid"> 
            {allVans}
        </div>
      </div>
    )
}
