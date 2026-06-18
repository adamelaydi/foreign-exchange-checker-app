// COMPONENT
import SelectionInput from "./SelectionInput.jsx"
//IMAGE
import icon from "../assets/icon-exchange.svg"
// STYLING 
import "../styling/RateSection.css"
// material ui
import StarIcon from '@mui/icons-material/Star';
export default function RateSection(){
    return(
        <>
            <div className="rate">
                <h3>check the rate</h3>
                <div className="rate-sec">
                    <div className="info">
                        <div className="send-sec">
                            <p>send</p>
                            <div className="data">
                                <input type="text" className="text" value={"100.00"} />
                                <SelectionInput     />   
                            </div>
                        </div>
                        <button className="switch"><img src={icon}/></button>

                        <div className="receive-sec">
                            <p>receive</p>
                            <div className="data">
                                <input type="text" className="text" readOnly value={"152.35"}/>
                                <SelectionInput />  
                            </div>
                        </div>
                    </div>
                    <div className="rate-footer">
                        <p>1 usd = 0.8530 eur</p>
                        <div className="btns">
                            <button><StarIcon calss/>Favorite</button>
                            <button>log conversion</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}