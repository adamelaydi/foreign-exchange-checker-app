// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// MARQEE BAR ANIMATION
import Marquee from "react-fast-marquee/dist/react-fast-marquee.es.js";
// STYLING
import "../styling/LiveMarket.css"
export default function LiveMarket(){
    console.log(Marquee)
    return(
        <>
            <div className="live-market">
                    <NodeHeader/>
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
            </div>
        </>
    )
}
