// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// MARQEE BAR ANIMATION
import * as MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default;// STYLING
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
