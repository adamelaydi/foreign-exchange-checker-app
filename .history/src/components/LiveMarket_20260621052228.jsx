// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// HOOKS
// REDUCER FUNCTIONS
// STYLING
import "../styling/LiveMarket.css"
// API METHODS

export default function LiveMarket(){


    return(
        <div className="parent-live">
            <NodeHeader/>
            <div className="live-market">
                <div className="track">
                    <Node base={"USD"} quote={"EUR"} />
                    <Node base={"USD"} quote={"AED"} />
                    <Node base={"AED"} quote={"EUR"} />
                    <Node base={"USD"} quote={"AMD"} />
                    <Node base={"USD"} quote={"ANG"} />
                    <Node base={"USD"} quote={"AFN"} />
                    <Node base={"A"} quote={"EUR"} />
                    <Node base={"USD"} quote={"EUR"} />
                    <Node base={"USD"} quote={"EUR"} />
                    <Node base={"USD"} quote={"EUR"} />
                </div>
            </div>
        </div>
    )
}
