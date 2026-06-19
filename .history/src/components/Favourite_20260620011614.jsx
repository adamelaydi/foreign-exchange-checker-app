// COMPONENTS
import FavoritePair from "./FavoritePair"
export default function Favourite(){
    return(
        <div className="favourite">
            <div className="header">
                <p className="title">pinned pairs</p>
                <p><span>10</span> favorites</p>
            </div>
            <div className="content">
                <FavoritePair/>
            </div>
        </div>
    )
}