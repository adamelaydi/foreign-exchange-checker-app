//HOOKS
import { useEffect,useState } from "react"
// COMPONENTS
import FavoritePair from "./FavoritePair"
// STYLING
import "../styling/Favorite.css"
export default function Favourite(){
    const [Data,setData]=useState([""]);
    let Pairs;
    useEffect(()=>{
        async function getData(){
            let data = JSON.parse(localStorage.getItem("favorits"))
            setData(data)
        }
        getData();
        Data.forEach((d)=>{
            
        })
        },[])
    return(
        <div className="favorite">
            <div className="header">
                <p className="title">pinned pairs</p>
                <p><span>10</span> favorites</p>
            </div>
            <div className="content">
                <FavoritePair/>
                <FavoritePair/>
                <FavoritePair/>
                <FavoritePair/>
                <FavoritePair/>
                <FavoritePair/>
                <FavoritePair/>
                <FavoritePair/>
            </div>
        </div>
    )
}