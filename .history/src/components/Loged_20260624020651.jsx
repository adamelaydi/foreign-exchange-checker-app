//HOOKS
import { useEffect } from "react"
// COMPONENTS
import LogedPair from "./LoggedPair"
// STYLING
import "../styling/Loged.css"
// MATERIAL UI
import { Button } from "@mui/material"
export default function Loged(){
    useEffect(()=>{
        function get
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