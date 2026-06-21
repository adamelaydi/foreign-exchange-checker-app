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
    const [data,setData]=useState([])
    // GETTING DATA FROM API
    useEffect(()=>{
        async function getData(){
            const data1= await GetLiveMarketData("USD","EUR");
            const data2= await GetLiveMarketData("USD","EGP");
            const data3= await GetLiveMarketData("EUR","EGP");
            const data4= await GetLiveMarketData("USD","AED");
            const data5= await GetLiveMarketData("EUR","AED");
            setData([data1,data2,data3,data4,data5])
        }
        getData();
    },[])
    let data
    useEffect(()=>{
        return data.map((d)=>{
            <Node data={d}/>
        })
    },data)
    return(
        <div className="parent-live">
            <NodeHeader/>
            <div className="live-market">
                <div className="track">
                    <Node data={data[0]} />
                    <Node data={data[1]}/>
                    <Node data={data[2]}/>
                    <Node data={data[3]}/>
                    <Node data={data[4]}/>
                    <Node data={data[0]}/>
                    <Node data={data[1]}/>
                    <Node data={data[2]}/>
                    <Node data={data[3]}/>
                    <Node data={data[4]}/>
                </div>
            </div>
        </div>
    )
}
