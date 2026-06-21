//HOOKS
import { useEffect ,useState } from "react"
// API
import {GetLiveMarketData} from "../API/LiveMarkeAPI"
export default function Node({base,quote}){
    const [data,setData]=useState(null)
    useEffect(()=>{
        async function getData(){
            const d=await GetLiveMarketData(base,quote);
            setData (d);
        }
        if (base && quote) {
        getData();
        }
    }, [base, quote]);
    return(
        <>
            <div className="node">
                <span className="title"><span>{data?.base}</span>/<span>{data?.quote}</span></span>
                <span className="value">157.91</span>
                <div className="pointer">
                    <span className="arrow">^</span>
                    <span className="value">{data?.rate}</span>
                </div>
            </div>
        </>
    )
}