import { GetHistory } from "../API/HistoryApi";

function transformData(data, quote) {
const Xval = [];        
const Yval = [];

data.forEach((d) => {
        if (d.rate && d.rate[quote] !== undefined) {
        Xval.push(d.date);
        Yval.push(d.rates[quote]);
        }
});

return { X: Xval, Y: Yval };
}
export async function handleHistoryClick(base, quote, type) {
        const data = await GetHistory(base, quote, type);
        return transformData(data, quote);
}