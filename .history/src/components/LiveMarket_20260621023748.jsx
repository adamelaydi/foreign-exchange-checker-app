// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// HOOKS
import { useEffect } from "react"
// STYLING
import "../styling/LiveMarket.css"
// API METHODS
import {GetLiveMarketData} from "../API/LiveMarkeAPI"
export default function LiveMarket(){
    // GETTING DATA FROM API
    useEffect(()=>{
        const data1= async GetLiveMarketData("USD","EUR");
    })
    return(
        <div className="parent-live">
            <NodeHeader/>
            <div className="live-market">
                <div className="track">
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                </div>
            </div>
        </div>
    )
}
