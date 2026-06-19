// COMPONENTS
import FavoritePair from "./FavoritePair"
// STYLING
import "../styling/Favorite.css"
// 
export default function Loged(){
    return(
        <div className="loged">
            <div className="header">
                <p className="title">converstion</p>
                <div className="info">
                    <p><span>8</span> logged</p>

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