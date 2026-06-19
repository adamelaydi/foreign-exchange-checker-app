// COMPONENTS
import FavoritePair from "./FavoritePair"
// STYLING
import "../styling/Favorite.css"
// MATERIAL UI
import { Button } from "@mui/material"
export default function Loged(){
    return(
        <div className="loged">
            <div className="header">
                <p className="title">converstion</p>
                <div className="info">
                    <p><span>8</span> logged</p>
                    <
                </div>
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