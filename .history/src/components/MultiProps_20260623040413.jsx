//COMPONENTS
import History from "./History"
import Compare from "./Compare"
import Favourite from "./Favourite"
import Loged from "./Loged"
// HOOKS 
import { useState } from "react"
// STYLING
import "../styling/MultiPurpos.css"
// ROUTER
import { Link } from "react-router-dom";
export default function MultiProps(){
    // State
    const [barInput,setInput]=useState({value:"HISTORY",appeare:true})

    return(
    <>
    <div className="main-sec">
            <nav>
                <input type="text" onFocus={()=>{
                    setInput({...barInput,appeare:true})
                }} value={barInput.value} readOnly />
                <ul style={{
                        display:(barInput.appeare)?"flex":"none"
                    }}>
                    <Link to="/">
                    <li className="active"  onClick={()=>{
                        setInput({value:"HISTORY" ,appeare:false})
                    }}>history</li>
                    </Link>
                    <Link to="/compare">
                    <li onClick={()=>{
                        setInput({value:"COMPARE" ,appeare:false})
                    }}>compare</li>
                    </Link>
                    
                    <li onClick={()=>{
                        setInput({value:"FAVORITES" ,appeare:false})
                    }}>favorites</li>
                    <li onClick={()=>{
                        setInput({value:"LOG" ,appeare:false})
                    }}>log</li>
                </ul>
            </nav>
            <Container  />
    </div>
    
    </> 
    )
}