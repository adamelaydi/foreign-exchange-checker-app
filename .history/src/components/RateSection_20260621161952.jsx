// COMPONENT
import SelectionInput from "./SelectionInput.jsx"
// HOOKS
import { useEffect, useState } from "react";
// API
import { GetLiveMarketData } from "../API/LiveMarkeAPI.jsx";
//IMAGE
import icon from "../assets/icon-exchange.svg"
// STYLING 
import "../styling/RateSection.css"
// material ui
import StarIcon from '@mui/icons-material/Star';
export default function RateSection(){
    const [value,setValue]=useState({sendValue:"" , base:"",quote:""});
    useEffect(()=>{
        async function GetData(){
            let d= await GetLiveMarketData(value.base,value.quote);
            console.log(d);
        }

    },[value,set])
    return(
        <>
            <div className="rate">
                <h3>check the rate</h3>
                <div className="rate-sec">
                    <div className="info">
                        <div className="send-sec">
                            <p>send</p>
                            <div className="data">
                                <input type="text" value={value} onChange={(e)=>{
                                    setValue(e.target.value)
                                }}className="text" placeholder="100.00"/>
                                <SelectionInput   />   
                            </div>
                        </div>
                        <button className="switch"><img src={icon}/></button>
                        <div className="receive-sec">
                            <p>receive</p>
                            <div className="data">
                                <input type="text" className="text" readOnly value={"152.35"}/>
                                <SelectionInput />  
                            </div>
                        </div>
                    </div>
                    <div className="rate-footer">
                        <p>1 usd = 0.8530 eur</p>
                        <div className="btns">
                            <button><StarIcon fontSize="small"/>Favorite</button>
                            <button>log conversion</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}