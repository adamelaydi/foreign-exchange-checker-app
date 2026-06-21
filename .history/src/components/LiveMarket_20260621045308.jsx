// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// HOOKS
import { useState, useEffect, } from "react"
// REDUCER FUNCTIONS
// STYLING
import "../styling/LiveMarket.css"
// API METHODS

export default function LiveMarket(){


console.log(data?.rate)

    return(
        <div className="parent-live">
            <NodeHeader/>
            <div className="live-market">
                <div className="track">
                   
                </div>
            </div>
        </div>
    )
}
