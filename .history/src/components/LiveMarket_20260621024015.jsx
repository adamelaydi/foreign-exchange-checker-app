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
        async function getData(){
            const data1= await GetLiveMarketData("USD","EUR");
            const data2= await GetLiveMarketData("USD","EG");
            const data3= await GetLiveMarketData("USD","EUR");
            const data4= await GetLiveMarketData("USD","EUR");
            const data5= await GetLiveMarketData("USD","EUR");
        }
        getData();
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
