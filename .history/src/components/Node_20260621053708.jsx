    import { useEffect, useState } from "react";
    import { GetLiveMarketData } from "../API/LiveMarkeAPI";

    export default function Node({ base, quote }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
        const d = await GetLiveMarketData(base, quote);
        console.log(d)
        if(d.rate>1){
            let da=d;
            let rate=`+${da.rate}`;
            let value=100*d.rate;
            setData({...d,rate:rate,val:value});
        }
        else{
            let da=d;
            let rate=`${1-da.rate}`;
            let value=100*da.rate;
            setData({...d,rate:rate,val:value});
        }
        }

        if (base && quote) {
        getData();
        }
    }, [base, quote]);

    return (
        <div className="node">
        <span className="title">
            {data?.base || base}/{data?.quote || quote}
        </span>

        <span className="value">
            {data?.val}
        </span>

        <div className="pointer">
            <span className="arrow">^</span>
            <span className="value">{data?.rate).toFixed(2)}</span>
        </div>
        </div>
    );
    }