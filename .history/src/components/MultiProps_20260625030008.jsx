//COMPONENTS
// HOOKS 
import { useState } from "react"
// STYLING
import "../styling/MultiPurpos.css"
// ROUTER
import { Link } from "react-router-dom";
export default function MultiProps(){
    // State
    const [barInput,setInput]=useState({value:"HISTORY",appeare:false})
    const [width, setWidth] = useState(window.innerWidth);
    return(
    <>
    <div className="main-sec">
            <nav>
                <input type="text" onFocus={()=>{
                    setInput({...barInput,appeare:true})
                }} value={barInput.value} readOnly />
                <ul style={{
                display: width <= 480
                    ? (barInput.appeare ? "none" : "none")
                    : "flex"
                }}>
                    <Link to="/" className="Link">
                    <li onClick={()=>{
                        if(innerWidth<"480"){
                            setInput({value:"HISTORY" ,appeare:false})
                        }
                    }}>history</li>
                    </Link>
                    <Link to="/compare"  className="Link">
                    <li onClick={()=>{
                        if(innerWidth<"480"){
                            setInput({value:"COMPARE" ,appeare:false})
                        }                    
                        }}>compare</li>
                    </Link>
                    <Link to="/favorite"  className="Link">
                    <li onClick={()=>{
                        if(innerWidth<"480"){
                            setInput({value:"FAVORITES" ,appeare:false})
                        }
                    }}>favorites</li>
                    </Link>
                    <Link to="/log"  className="Link">
                    <li onClick={()=>{
                        if(innerWidth<"480"){
                            setInput({value:"LOG" ,appeare:false})
                        }
                    }}>log</li>
                    </Link>
                </ul>
            </nav>
    </div>
    
    </> 
    )
}