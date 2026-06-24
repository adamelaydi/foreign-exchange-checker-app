// HOOKS
import { useEffect, useState } from 'react';
// API
import { GetLiveMarketData } from '../API/LiveMarkeAPI';
// MATERIAL UI
import GradeIcon from '@mui/icons-material/Grade';
// IMAGE
import logo from "../assets/eg.webp"
// STYLING
import "../styling/Paire.css"
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
                    <p className="code">eg</p>
                    <p className="fullname">egypt</p>
                </div>
                <div className="result">
                    <p className='value'>157.910</p>
                    <p className='rate'><span>@ </span> 157.91</p>
                </div>
            </div>
            <GradeIcon className="fav" />
        </div>
    )
}