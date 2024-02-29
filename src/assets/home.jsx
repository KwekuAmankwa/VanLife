import React from "react";
import { Link } from "react-router-dom"



export default function Home() {
    return(
      <>
        
        <main>
            <div className="main-content">
                <h1 className="plans">You got the travel plans. We got the travel vans</h1>
                <p className="intro">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to= "/vans" className="find-van">Find your van</Link>
            </div>
        </main>
      </>
    )
}

