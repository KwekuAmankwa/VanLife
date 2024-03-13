import React, {Suspense} from "react";
import {Link, defer, Await, useLoaderData} from "react-router-dom"
import { getHostVans } from "../../api";
import { requireAuth } from "../../utilities";
import {BsStarFill} from "react-icons/bs"


export async function loaderFunction({request}){
    await requireAuth(request)
    return defer({vans: getHostVans()})
}

export default function Dashboard(){
    const loaderData = useLoaderData()

    function renderHostVans(vans){
        const hostVansEls = vans.map(van => (
            
                <div className="host-van-single dashboard" key={van.id}>
                    <div className="bandaid">
                        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                        <div className="host-van-info">
                            <p className="host-van-name">{van.name}</p>
                            <p className="host-van-price">${van.price}/day</p>
                        </div>
                    </div>
                    <Link to={`/host/vans/${van.id}`}>View</Link>
                </div>
            
        ))
        return(
            <div className="host-vans-list">
                <div className="host-van-link-wrapper">
                    <section className="van-singles">
                        {hostVansEls}
                    </section>
                </div>
            </div>
        )
    }

    return(
        <>
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="host-dashboard-reviews">
                <h2>Review score</h2>
                <div className="rating">
                    <BsStarFill className="star" />
                    <p>
                        <span>5.0</span>/5
                    </p>
                </div>
                <Link to="reviews">Details</Link>
            </section>
            <section className="host-vans-holder">
                <h1 className="host-vans-title">Your listed vans</h1>
                <Suspense fallback={<h1>Getting Host Vans...</h1>}>
                    <Await resolve={loaderData.vans}>
                        {renderHostVans}
                    </Await>
                </Suspense>
            </section>
        </>
    )
}