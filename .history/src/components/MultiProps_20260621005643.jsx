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
                <input type="text" onClick={()=>{
                    setInput({...barInput,appeare:true})
                }} value={barInput}  disabled/>
                <ul>
                    <li className="active" style={{
                        display:(barTnpu)
                    }} onClick={()=>{
                        setInput({value:"HISTORY" ,appeare:false})
                    }}>history</li>
                    <li onClick={()=>{
                        setInput({value:"COMPARE" ,appeare:false})
                    }}>compare</li>
                    <li onClick={()=>{
                        setInput({value:"FAVORITES" ,appeare:false})
                    }}>favorites</li>
                    <li onClick={()=>{
                        setInput({value:"LOG" ,appeare:false})
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