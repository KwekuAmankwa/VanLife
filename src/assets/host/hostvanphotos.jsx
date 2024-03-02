import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos(){
    const { van } = useOutletContext()

    return(
        <div className="host-vanimage">
            <img src= {van.imageUrl} alt="" />
        </div>
    )
}