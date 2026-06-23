//HOOKS

// COMPONENTS
import FavoritePair from "./FavoritePair"
// STYLING
import "../styling/Favorite.css"
export default function Favourite(){
    
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