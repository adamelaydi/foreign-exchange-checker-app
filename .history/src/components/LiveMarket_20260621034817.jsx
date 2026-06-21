// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// HOOKS
import { useDebugValue, useEffect, } from "react"
// REDUCER FUNCTIONS
// STYLING
import "../styling/LiveMarket.css"
// API METHODS
import {GetLiveMarketData} from "../API/LiveMarkeAPI"
export default function LiveMarket(){
    // // set Data
    
useEffect(() => {
    async function getData() {
        redconst data = await Promise.all([
        GetLiveMarketData("USD", "EUR"),
        GetLiveMarketData("USD", "EGP"),
        ]);
    }
    getData();
}, []);

    

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
