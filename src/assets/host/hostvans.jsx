import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans(){
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])


    const hostVansEls = vans.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <p className="host-van-name">{van.name}</p>
                    <p className="host-van-price">${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return(
        <section className="host-vans-holder">
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section className="van-singles">
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}