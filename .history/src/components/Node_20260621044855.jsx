export default function Node([based,quote]){
    import {GetLiveMarketData} from "../API/LiveMarkeAPI"
    return(
        <>
            <div className="node">
                <span className="title"><span>{data.base}</span>/<span>{data.quote}</span></span>
                <span className="value">157.91</span>
                <div className="pointer">
                    <span className="arrow">^</span>
                    <span className="value">+0.04%</span>
                </div>
            </div>
        </>
    )
}