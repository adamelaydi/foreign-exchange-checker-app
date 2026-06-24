// HOOKS
import { useEffect, useState } from 'react';
// API
import { GetLiveMarketData } from '../API/LiveMarkeAPI';
// MATERIAL UI
import GradeIcon from '@mui/icons-material/Grade';
// IMAGE
import logo from "../"
// STYLING
import "../styling/Paire.css"
import { data } from 'react-router-dom';
export default function Paire({base,quote}){
     const [Data,setData]=useState({base:"",quote:"",rate:""})
    useEffect(()=>{
        async function getData(){
            let response= await GetLiveMarketData(base,quote);
            setData(response)
        }
        getData();
    },[])
    return(
        <div className='parent'>
            <img src={logo}/>
            <div className="info pair-info">
                <div className="name">
                    <p className="code">{quote}</p>
                    <p className="fullname">{base}</p>
                </div>
                <div className="result">
                    <p className='value'>{Number(Data.rate).toFixed(2)}</p>
                    <p className='rate'><span>@ </span>{Number(Data.rate*100).toFixed(2)}</p>
                </div>
            </div>
            <GradeIcon className="fav" />
        </div>
    )
}