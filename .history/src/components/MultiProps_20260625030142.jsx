//COMPONENTS
// HOOKS 
import { useState } from "react"
// STYLING
import "../styling/MultiPurpos.css"
// ROUTER
import { Link } from "react-router-dom";
export default function MultiProps(){
    // State
    const [barInput,setInput]=useState({value:"HISTORY",appeare:true})
    const [width, setWidth] = useState(window.innerWidth);
    return(
    <>
    <div className="main-sec">
            <nav>
                <input type="text" onFocus={()=>{
                    setInput({...barInput,appeare:false})
                }} value={barInput.value} readOnly />
                <ul style={{
                display: width <= 480
                    ? (barInput.appeare ? "none" : "flex")
                    : "flex"
                }}>
                    <Link to="/" className="Link">
                    <li onClick={()=>{
                        if(innerWidth<"480"){
                            setInput({value:"HISTORY" ,appeare:true})
                        }
                    }}>history</li>
                    </Link>
                    <Link to="/compare"  className="Link">
                    <li onClick={()=>{
                        if(innerWidth<"480"){
                            setInput({value:"COMPARE" ,appeare:true})
                        }                    
                        }}>compare</li>
                    </Link>
                    <Link to="/favorite"  className="Link">
                    <li onClick={()=>{
                        if(innerWidth<"480"){
                            setInput({value:"FAVORITES" ,appeare:true})
                        }
                    }}>favorites</li>
                    </Link>
                    <Link to="/log"  className="Link">
                    <li onClick={()=>{
                        if(innerWidth<"480"){
                            setInput({value:"LOG" ,appeare:true})
                        }
                    }}>log</li>
                    </Link>
                </ul>
            </nav>
    </div>
    
    </> 
    )
}