import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";


export function loader(){
    return getHostVans()
}
export default function HostVans(){
    const vans = useLoaderData()


    const hostVansEls = vans.map(van => (
        <Link
            to= {van.id}
            key= {van.id}
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