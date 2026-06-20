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
    return(
    <>
    <div className="main-sec">
            <nav>
                <input type="text"  disabled/>
                <ul>
                    <li className="active">history</li>
                    <li>compare</li>
                    <li>favourites</li>
                    <li>log</li>
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