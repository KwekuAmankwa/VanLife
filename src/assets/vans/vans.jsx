import React from "react";
import { Link, useLoaderData, useSearchParams, defer, Await } from "react-router-dom"
import { getVans } from "../../api";



export function loader(){
    return defer({vans: getVans()})
}

export default function Vans() {
    const dataPromise = useLoaderData()

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const lowerType = typeFilter ? typeFilter.toLowerCase() : ""


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


    return(
      <div className="vans-container">
        <h1>Explore our van options</h1>
        <Await resolve={dataPromise.vans}>
            {vans=>{
                const displayedVans = typeFilter
                ? vans.filter(van => van.type === typeFilter)
                : vans
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
                return (
                    <>
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
                    </>
                )
            }
            }
        </Await>
      </div>
    )
}
