// COMPONENT
import SelectionInput from "./SelectionInput.jsx"
// HOOKS
import { useContext, useEffect} from "react";
// CONTEXTS
import { DataContext } from "../contexts/DataContext.jsx";
// API
import { GetLiveMarketData } from "../API/LiveMarkeAPI.jsx";
//IMAGE
import icon from "../assets/icon-exchange.svg"
// STYLING 
import "../styling/RateSection.css"
// material ui
import StarIcon from '@mui/icons-material/Star';

export default function RateSection(){
    const {value,setValue}=useContext(DataContext)
    useEffect(()=>{
        async function GetData(){
            let d= await GetLiveMarketData(value.base,value.quote);
            setValue({...value,rate:d.rate})
        }
        if(value.sendValue&&value.base&&value.quote){
            GetData();
        }
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
                                }}className="text" placeholder="0.00"/>
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
                                <input type="text" className="text" readOnly value={Number(value.rate*Number(value.sendValue)).toFixed(2)} placeholder="000.00"/>
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
                                if(value.base&&value.quote&&value.rate){
                                    if(!localStorage.getItem("favorits")){
                                        localStorage.setItem("favorits",JSON.stringify([{base:value.base,quote:value.quote}]))
                                    }else{
                                        localStorage.setItem("favorits",JSON.stringify([...JSON.parse(localStorage.getItem("favorits")),{base:value.base,quote:value.quote}]))
                                    }
                                }}><StarIcon fontSize="small"/>Favorite</button>

                                }
                            <button onClick={()=>{
                                if(!localStorage.getItem("log")){
                                    localStorage.setItem("log",JSON.stringify([{base:value.base,quote:value.quote}]))
                                }else{
                                    localStorage.setItem("log",JSON.stringify([...JSON.parse(localStorage.getItem("log")),{base:value.base,quote:value.quote}]))
                                }
                            }}>log conversion</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}