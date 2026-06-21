//HOOKS
import { useEffect ,useState } from "react"
// API
import {GetLiveMarketData} from "../API/LiveMarkeAPI"
export default function Node({base,quote}){
    const [data,setData]=useState({})
    useEffect(()=>{
        async function getData(){
            const d=await GetLiveMarketData(base,quote);
            setData (d);
            console.log(data)
        }
        if (base && quote) {
        getData();
        }
    }, [base, quote]);
    return(
        <>
            <div className="node">
                <span className="title"><span>{data.base|| base}</span>/<span>{data.quote|| quote}</span></span>
                <span className="value">157.91</span>
                <div className="pointer">
                    <span className="arrow">^</span>
                    <span className="value">+0.04%</span>
                </div>
            </div>
        </>
    )
}