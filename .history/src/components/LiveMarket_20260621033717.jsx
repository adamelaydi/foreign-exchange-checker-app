// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// HOOKS
import { useDebugValue, useEffect,useReducer } from "react"
// REDUCER FUNCTIONS
import LiveMarketapiReducer from "../Reducers/LiveMarketapiReducer"
// STYLING
import "../styling/LiveMarket.css"
// API METHODS
import {GetLiveMarketData} from "../API/LiveMarkeAPI"
export default function LiveMarket(){
    // // set Data
    const [state,dispatch]=useReducer(LiveMarketapiReducer,{data:})
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
useEffect(()=>{
    console.log(state.data)

},state)
    

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
