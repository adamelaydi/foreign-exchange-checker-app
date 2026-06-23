import { GetHistory } from "../API/HistoryApi";

function transformData(data, quote) {
const Xval = [];        
const Yval = [];
if(data)
data.forEach((d) => {
        if(d.quote===quote){ 
                Xval.push(d.date);
                Yval.push(d.rate);
        }
});

return { X: Xval, Y: Yval };
}
export async function handleHistoryClick(base, quote, type) {
        const data = await GetHistory(base, quote, type);
        return transformData(data, quote);
}