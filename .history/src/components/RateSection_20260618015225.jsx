// COMPONENT
import SelectionInput from "./SelectionInput"
//IMAGE
import icon from "../assets/icon-exchange.svg"
// STYLING 
import RateSection from "./"
export default function RateSection(){
    return(
        <>
            <seciton className="rate">
                <h3>check the rate</h3>
                <div className="rate-sec">
                    <div className="info">
                        <div className="send-sec">
                            <p>send</p>
                            <div className="data">
                                <input type="text" className="text" />
                                <SelectionInput />   
                            </div>
                        </div>
                        <button className="switch"><img src={icon}/></button>

                        <div className="receive-sec">
                            <p>receive</p>
                            <div className="data">
                                <input type="text" className="text" />
                                <SelectionInput />  
                            </div>
                        </div>
                    </div>
                    <div className="rate-footer">
                        <p>1 usd = 0.8530 eur</p>
                        <div className="btns">
                            <button>Favorite</button>
                            <button>log conversion</button>
                        </div>
                    </div>
                </div>
            </seciton>
        </>
    )
}