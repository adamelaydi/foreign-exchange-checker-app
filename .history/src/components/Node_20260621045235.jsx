//HOOKS
import { useEffect ,useState } from "react"
// API
import {GetLiveMarketData} from "../API/LiveMarkeAPI"
export default function Node({based,quote}){
    const [data,setData]=useState({})
    useEffect(()=>{
        async function getData(){
            const d=await GetLiveMarketData(based,quote);
            setData (d);
        }
        getData
    })

    return(
        <>
            <div className="node">
                <span className="title"><span>{data.base}</span>/<span>{data.quote}</span></span>
                <span className="value">157.91</span>
                <div className="pointer">
                    <span className="arrow">^</span>
                    <span className="value">+0.04%</span>
                </div>
            </div>
        </>
    )
}