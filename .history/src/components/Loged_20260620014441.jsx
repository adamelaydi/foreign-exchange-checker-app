// COMPONENTS
import FavoritePair from "./FavoritePair"
// STYLING
import "../styling/Favorite.css"
export default function Loged(){
    return(
        <div className="loged">
            <div className="header">
                <p className="title">converstion</p>
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