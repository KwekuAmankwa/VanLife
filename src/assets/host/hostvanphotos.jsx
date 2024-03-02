import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos(){
    const { van } = useOutletContext

    return(
        <h1>Photos</h1>
    )
}