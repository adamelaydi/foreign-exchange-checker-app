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
    const [value,setValue]=useState({sendValue:"" , base:"",quote:"" ,rate:""});
    useEffect(()=>{
        async function GetData(){
            let d= await GetLiveMarketData(value.base,value.quote);
            setValue({...value,rate:d.rate})
            console.log(d);
        }
        if(value.sendValue&&value.base&&value.quote){
            GetData();
        }
        console.log(value);
    },[value.sendValue,value.base,value.quote])
    return(
        <>
            <div className="rate">
                <h3>check the rate</h3>
                <div className="rate-sec">
                    <div className="info">
                        <div className="send-sec">
                            <p>send</p>
                            <div className="data">
                                <input type="text" value={value.sendValue} onChange={(e)=>{
                                    setValue({...value,sendValue:e.target.value})
                                }}className="text" placeholder="100.00"/>
                                <SelectionInput
                                    value={value.base}
                                    onChange={(currency) =>
                                        setValue({
                                        ...value,
                                        base: currency
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <button className="switch" onClick={()=>{
                            setValue({...value,base:value.quote,quote:value.base})
                        }}><img src={icon}/></button>
                        <div className="receive-sec">
                            <p>receive</p>
                            <div className="data">
                                <input type="text" className="text" readOnly value={Number(value.rate*Number(value.sendValue)).toFixed(2)}/>
                                <SelectionInput
                                    value={value.quote}
                                    onChange={(currency) =>
                                        setValue({
                                        ...value,
                                        quote: currency
                                        })
                                    }
                                />  
                            </div>
                        </div>
                    </div>
                    <div className="rate-footer">
                        <p>1 <span>{value.base}</span> = <span>{Number(value.rate || 0).toFixed(2)}</span> <span>{value.quote}</span></p>
                        <div className="btns">
                            <button onClick={()=>{
                                if(localStorage.getItem("favorits")==null){
                                    localStorage.setItem.
                                }
                            }}><StarIcon fontSize="small"/>Favorite</button>
                            <button>log conversion</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}