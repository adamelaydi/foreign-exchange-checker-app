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
    const [barInput,setInput]=useState({value:"",appeare:false})

    return(
    <>
    <div className="main-sec">
            <nav>
                <input type="text" value={barInput}  disabled/>
                <ul>
                    <li className="active" onClick={()=>{
                        setInput({value:"HISTORY" ,appeare:false})
                    }}>history</li>
                    <li onClick={()=>{
                        setInput({value:"COMPARE" ,appeare:false})
                    }}>compare</li>
                    <li onClick={()=>{
                        COMPARE
                        setValue("FAVORITES")
                    }}>favorites</li>
                    <li onClick={()=>{
                        setValue("LOG")
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