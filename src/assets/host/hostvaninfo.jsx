import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo(){
    const { van } = useOutletContext()
    return(
        <div className="host-vaninfo">
            <h4>Name: <span>{van.name}</span></h4>
            <h4>Type: <span>{van.type}</span></h4>
            <h4>Description: <span>{van.description}</span></h4>
            <h4>Visibility: <span>Visible</span></h4>
        </div>
    )
}