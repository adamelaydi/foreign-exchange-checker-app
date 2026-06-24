    // HOOKS
    import { useEffect, useState } from "react";
    // API
    import { GetLiveMarketData } from "../API/LiveMarkeAPI";

    export default function Node({ base, quote }) {
        // STATE
    const [data, setData] = useState(null);
        // EFFECT
    useEffect(() => {
        async function getData() {
        const d = await GetLiveMarketData(base, quote);
        set
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
            <span className="value" style={{
                color:data?.rate<1 ?"red":"green"
            }}>{data?.rate ? Number(data.rate).toFixed(2):"" }</span>
        </div>
        </div>
    );
    }