// HOOKS
import { useEffect, useState } from 'react';
// API
import { GetLiveMarketData } from '../API/LiveMarkeAPI';
// MATERIAL UI
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
// STYLING
import "../styling/LogedPair.css"
export default function LogedPair({base,quote}){
    const [Data,setData]=useState({base:"",quote:"",rate:""})
        useEffect(()=>{
            async function getData(){
                let response= await GetLiveMarketData(base,quote);
                setData(response)
            }
            getData();
        },[])
    return(
        <div className='Loged-parent'>
            <div className="info-loged">
                <div className="name">
                    <p className="code"><span className="time">20M</span><span><span className="first">{base}</span> {"->"} <span className='second'>{quote}</span></span></p>
                </div>
                <div className="loged-result">
                    <p className='first-value'>1000.00</p>
                    <p className='second-value'>853.5</p>
                </div>
            </div>
            <IconButton aria-label="delete">
                <DeleteIcon className='del-btn' />
            </IconButton>
        </div>
    )
}