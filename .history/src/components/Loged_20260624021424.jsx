//HOOKS
import { useEffect,useState,useContext } from "react"
import { DataContext } from "../contexts/DataContext"
// COMPONENTS
import LogedPair from "./LoggedPair"
// STYLING
import "../styling/Loged.css"
// MATERIAL UI
import { Button } from "@mui/material"
export default function Loged(){
    const {value,setValue}=useContext(DataContext)
        const [pairs,setPairs]=useState(null);
        const [num,setNum]=useState(0)
        useEffect(()=>{
            async function getData(){
                let data = JSON.parse(localStorage.getItem("log"))
                setNum(data.length);
                let Pairs = data.map((d, index) => (
                <LogedPair
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
        <div className="loged">
            <div className="loged-header">
                <p className="title">converstion</p>
                <div className="info">
                    <p><span>{num}</span> logged</p>
                    <Button className="clear-btn" onClick={()=>{
                        localStorage.setItem("log",JSON.stringify([]))
                        set
                    }}>ClEAR ALL</Button>
                </div>
            </div>
            <div className="content loged-content">
                {pairs}
            </div>
        </div>
    )
}