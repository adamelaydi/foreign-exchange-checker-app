//HOOKS
import { useEffect,useState,useContext } from "react"
import { DataContext } from "../contexts/DataContext";
// COMPONENTS
import Paire from "./Pair"
// STYLING
import "../styling/Compare.css"
export default function Compare(){
    const {value,setValue}=useContext(DataContext)
    const [pairs,setPairs]=useState(null);
    useEffect(()=>{
        async function getData(){
            let data = JSON.parse(localStorage.getItem("favorits"))
            let Pairs = data.map((d, index) => (
            if(dquote!="USD"){
                <Paire
                    key={index}
                    base={"USD"}
                    quote={d.quote}
                />

            }
));
            setPairs(Pairs)
        }
        getData();
        },[value.rate])
    return(
        <div className="compare">
            <div className="header-sec">
                <p className="h"><span className="mult">multi-currency </span><span className="num">1000 from usd</span></p>
                <p className="pair"><span>{pairs?.length}</span> pairs</p>
            </div>
            <div className="pairs">
                {pairs}
            </div>
        </div>
    )
}