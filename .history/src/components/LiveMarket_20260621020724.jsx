// COMPONENTS
import Node from "./Node"
import NodeHeader from "./NodeHeader"
// MARQEE BAR ANIMATION
import Marquee from "react-fast-marquee";
// STYLING
import "../styling/LiveMarket.css"
export default function LiveMarket(){
    console.log(Marquee)
    return(
        <>
            <Marquee>
  <div>TEST 1</div>
  <div>TEST 2</div>
</Marquee>
        </>
    )
}
