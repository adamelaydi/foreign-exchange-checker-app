//HOOKS
import { useEffect,useState } from "react"
// COMPONENTS
import FavoritePair from "./FavoritePair"
// STYLING
import "../styling/Favorite.css"
export default function Favourite(){
    const [pairs,setPairs]=useState([""]);
    useEffect(()=>{
        async function getData(){
            let data = JSON.parse(localStorage.getItem("favorits"))
            let Pairs =data.forEach((d)=>{
                <FavoritePair base={d.base} quote={d.quote}/>
            })
            setPairs(Pairs)
        }
        getData();
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
            </div>
        </div>
    )
}