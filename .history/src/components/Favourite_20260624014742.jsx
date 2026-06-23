//HOOKS
import { useEffect,useState,useContext } from "react"
import { DataContext } from "../contexts/DataContext";
// COMPONENTS
import FavoritePair from "./FavoritePair"
// STYLING
import "../styling/Favorite.css"
export default function Favourite(){
    const {value,setValue}=useContext(DataContext)
    const [pairs,setPairs]=useState(null);
    const [num]
    useEffect(()=>{
        async function getData(){
            let data = JSON.parse(localStorage.getItem("favorits"))
            let Pairs = data.map((d, index) => (
            <FavoritePair
                key={index}
                base={d.base}
                quote={d.quote}
            />
));
            setPairs(Pairs)
        }
        getData();
        },[value.rate])
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