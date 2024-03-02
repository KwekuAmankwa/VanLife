import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo(){
    const { van } = useOutletContext
    return(
        <h1>Info</h1>
    )
}