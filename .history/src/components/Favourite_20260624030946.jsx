//HOOKS
import { useEffect,useState,useContext } from "react"
import { DataContext } from "../contexts/DataContext";
// COMPONENTS
import FavoritePair from "./FavoritePair"
// STYLING
import "../styling/Favorite.css"
export default function Favourite(){

    return(
        <div className="favorite">
            <div className="header">
                <p className="title">pinned pairs</p>
                <p><span>{num}</span> favorites</p>
            </div>
            <div className="content">         
                {pairs}
            </div>
        </div>
    )
}