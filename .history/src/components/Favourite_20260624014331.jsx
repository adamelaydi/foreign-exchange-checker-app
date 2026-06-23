//HOOKS
import { useEffect,useState,useContext } from "react"
import { DataContext } from "../contexts/DataContext";
// COMPONENTS
import FavoritePair from "./FavoritePair"
// STYLING
import "../styling/Favorite.css"
export default function Favourite(){
    const {value,setVal}
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
                
                {pairs}
            </div>
        </div>
    )
}