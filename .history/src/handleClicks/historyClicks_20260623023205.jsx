import { GetHistory } from "../API/HistoryApi";

function transformData(data, quote) {
const Xval = [];        
const Yval = [];

data.forEach((d) => {
        if (d.rates && d.rates[quote] !== undefined) {
        Xval.push(d.date);
        Yval.push(d.rates[quote]);
        }
});

return { X: Xval, Y: Yval };
}