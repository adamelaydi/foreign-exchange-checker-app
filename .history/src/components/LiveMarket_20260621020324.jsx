// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// MARQEE BAR ANIMATION
import Marquee from "react-fast-marquee";
// STYLING
import "../styling/LiveMarket"
export default function LiveMarket(){
    return(
        <>
            <div className="live-market">
                <Marquee>
                    <NodeHeader/>
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                </Marquee>
            </div>
        </>
    )
}
