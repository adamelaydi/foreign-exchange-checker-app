// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// HOOKS

// STYLING
import "../styling/LiveMarket.css"
export default function LiveMarket(){
    // GETTING DATA FROM API

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
