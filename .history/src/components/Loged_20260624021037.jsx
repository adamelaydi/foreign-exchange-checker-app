//HOOKS
import { useEffect,useState } from "react"
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
                let data = JSON.parse(localStorage.getItem("favorits"))
                setNum(data.length);
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
    const [Data,setData]=useState([""])
    useEffect(()=>{
        async function getData(){
            let data = JSON.parse(localStorage.getItem("log"));
            seti
        }
    })
    return(
        <div className="loged">
            <div className="loged-header">
                <p className="title">converstion</p>
                <div className="info">
                    <p><span>8</span> logged</p>
                    <Button className="clear-btn">ClEAR ALL</Button>
                </div>
            </div>
            <div className="content loged-content">
                <LogedPair/>
                <LogedPair/>    
                <LogedPair/>
                <LogedPair/>
                <LogedPair/>
                <LogedPair/>
                <LogedPair/>
                <LogedPair/>
                
            </div>
        </div>
    )
}