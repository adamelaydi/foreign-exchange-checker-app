    import { useEffect, useState } from "react";
    import { GetLiveMarketData } from "../API/LiveMarkeAPI";

    export default function Node({ base, quote }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
        const d = await GetLiveMarketData(base, quote);
        console.log(d)

            setData({...d,rate:rate,val:value});
        }
        setData(d);
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
            <span className="value">{data?.rate}</span>
        </div>
        </div>
    );
    }