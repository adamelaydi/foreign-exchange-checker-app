// COMPONENTS
import Paire from "./Pair"
// STYLING
import "../styling/Compare.css"
export default function Compare(){
    return(
        <div className="compare">
            <div className="header-sec">
                <p className="h"><span className="mult">multi-currency </span><span className="1000">1000 from usd</span></p>
                <p className="pair">8 pairs</p>
            </div>
            <div className="pairs">
                <Paire/>
            </div>
        </div>
    )
}