// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// HOOKS
import { useEffect,useState } from "react"
// STYLING
import "../styling/LiveMarket.css"
// API METHODS
import {GetLiveMarketData} from "../API/LiveMarkeAPI"
export default function LiveMarket(){
    // set Data

    // GETTING DATA FROM API
    useEffect(()=>{
        async function getData(){
            const data1= await GetLiveMarketData("USD","EUR");
            const data2= await GetLiveMarketData("USD","EGP");
            const data3= await GetLiveMarketData("EUR","EGP");
            const data4= await GetLiveMarketData("USD","AED");
            const data5= await GetLiveMarketData("EUR","AED");
        }
        getData();
    })
    return(
        <div className="parent-live">
            <NodeHeader/>
            <div className="live-market">
                <div className="track">
                    <Node data={} />
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
