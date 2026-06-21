// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// HOOKS
import { useState, useEffect, } from "react"
// REDUCER FUNCTIONS
// STYLING
import "../styling/LiveMarket.css"
// API METHODS
import {GetLiveMarketData} from "../API/LiveMarkeAPI"
export default function LiveMarket(){
    const [data,setData]=useState([])
    // // set Data
    
useEffect(() => {
    async function getData() {
        const data = await Promise.all([
        GetLiveMarketData("USD", "EUR"),
        GetLiveMarketData("USD", "EGP"),
        ]);
        setData(data);
    }
    getData();
}, []);

console.log(data[0])

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
