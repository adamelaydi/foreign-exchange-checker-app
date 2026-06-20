//COMPONENTS
import History from "./History"
import Compare from "./Compare"
import Favourite from "./Favourite"
import Loged from "./Loged"
// HOOKS 
import { useState } from "react"
// STYLING
import "../styling/MultiPurpos.css"

export default function MultiProps(){
    // State
    const [barValue,setValue]=useState("")

    return(
    <>
    <div className="main-sec">
            <nav>
                <input type="text" value={barValue}  disabled/>
                <ul>
                    <li className="active" onClick={()=>{
                        setValue("HISTORY")
                    }}>history</li>
                    <li onClick={()=>{
                        setValue("COMPARE")
                    }}>compare</li>
                    <li onClick={()=>{
                        setValue("FAVORITES")
                    }}>favorites</li>
                    <li onClick={()=>{
                        setValue("HISTORY")
                    }}>log</li>
                </ul>
            </nav>
            <div className="info-container">
                {/* <History/> */}
                {/* <Compare/> */}
                {/* <Favourite/> */}
                <Loged/>
            </div>
    </div>
    
    </> 
    )
}