import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing(){
    const { van } = useOutletContext()
    return(
        <div className="host-vaninfo">
            <p>${van.price}.00<span>/day</span></p>
        </div>
    )
}