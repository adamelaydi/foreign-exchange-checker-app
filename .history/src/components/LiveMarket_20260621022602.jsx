// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// STYLING
import "../styling/LiveMarket.css"
export default function LiveMarket(){

    return(
        <div className="parent-live">
            <NodeHeader/>
            <div className="live-market">
                <div className="track">
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                    <Node />
                </div>
            </div>
        </div>
    )
}
