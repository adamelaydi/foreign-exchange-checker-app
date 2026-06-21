// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// HOOKS
import { useEffect,useReducer } from "react"
// STYLING
import "../styling/LiveMarket.css"
// API METHODS
import {GetLiveMarketData} from "../API/LiveMarkeAPI"
export default function LiveMarket(){
    // // set Data
    const [data,dispatch]=useReducer([])
useEffect(() => {
    async function getData() {
        const data = await Promise.all([
        GetLiveMarketData("USD", "EUR"),
        GetLiveMarketData("USD", "EGP"),
        ]);
        dispatch({
        type: "setData",
        payload: data,
        });
    }

    getData();
}, []);
    // GETTING DATA FROM API
    // useEffect(()=>{
    //     async function getData(){
    //         const data1= await GetLiveMarketData("USD","EUR");
    //         const data2= await GetLiveMarketData("USD","EGP");
    //         const data3= await GetLiveMarketData("EUR","EGP");
    //         const data4= await GetLiveMarketData("USD","AED");
    //         const data5= await GetLiveMarketData("EUR","AED");
    //         return await [data1,data2,data3,data4,data5]
            
    //     }
    //     async function GetData(){
    //         let d=await getData();
    //         setData(d)
    //     }
    //     GetData();
    // },[])

    return(
        <div className="parent-live">
            <NodeHeader/>
            <div className="live-market">
                <div className="track">
                    {/* {data.map((d, index) => (
                        <Node key={index} data={d} />
                    ))} */}
                </div>
            </div>
        </div>
    )
}
