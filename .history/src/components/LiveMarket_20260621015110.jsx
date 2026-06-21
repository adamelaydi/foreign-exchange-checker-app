// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// MARQEE BAR ANIMATION
import Marquee from "react-fast-marquee"
// STYLING
import "../styling/LiveMarket.css"
export default function LiveMarket(){
    return(
        <>
            <Mar className="live-market">
                <NodeHeader/>
                <Node />
                <Node />
                <Node />
                <Node />
                <Node />
            </Ma>
        </>
    )
}
