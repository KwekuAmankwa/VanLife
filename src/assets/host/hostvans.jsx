import React, {Suspense} from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utilities";


export async function loaderFunction({request}){
    await requireAuth(request)
    return defer({vans: getHostVans()})
}

export default function HostVans(){
    const dataPromise = useLoaderData()

    function renderHostVans(vans){

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
        return (

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
        )
    }

    return(
        <section className="host-vans-holder">
            <h1 className="host-vans-title">Your listed vans</h1>
            <Suspense fallback={<h1>Getting Host Vans...</h1>}>
                <Await resolve={dataPromise.vans}>
                    {renderHostVans}
                </Await>
            </Suspense>
        </section>
    )
}