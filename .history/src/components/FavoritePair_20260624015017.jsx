// HOOKS
import { useEffect, useState } from 'react';
// API
import { GetLiveMarketData } from '../API/LiveMarkeAPI';
// MATERIAL UI
import GradeIcon from '@mui/icons-material/Grade';
// STYLING
import "../styling/FavoritePair.css"
import { data } from 'react-router-dom';
export default function FavoritePaire({base,quote}){
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
            <div className="info">
                <div className="name">
                    <p className="code"><span className="first">{Data.base}</span> {"->"} <span className='second'>{Data.quote}</span></p>
                </div>
                <div className="result">
                    <p className='value'>{Number(Number(Data.rate)*100).toFixed(2)}</p>
                    <p className='rate'>{Data.rate}</p>
                </div>
            </div>
            <button onClick={()=>{
                let data=localStorage.getItem(fa)
            }}>
            <GradeIcon className="fav"  />
            </button>
        </div>
    )
}