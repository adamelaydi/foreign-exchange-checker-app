// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// MARQEE BAR ANIMATION
import * as MarqueeModule from "react-fast-marquee";

// STYLING
import "../styling/LiveMarket.css"
export default function LiveMarket(){
    const Marquee = MarqueeModule.default || MarqueeModule;
    console.log(Marquee)
    return(
        <>
            <div className="live-market">
                <Marquee
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
