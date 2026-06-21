// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// MAR
// STYLING
import "../styling/LiveMarket.css"
export default function LiveMarket(){
    return(
        <>
            <section className="live-market">
                <NodeHeader/>
                <Node />
                <Node />
                <Node />
                <Node />
                <Node />
            </section>
        </>
    )
}
