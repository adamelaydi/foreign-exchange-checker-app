// AXIOS
import axios from "axios";
export function GetLiveMarketData(base,qoute){
    let url=`https://api.frankfurter.dev/v2/rate/${base}/${qoute} `
axios
.get(url, {

    })
    .then((response) => {
        console.log(response.data);
        return response.data
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Request completed");
    });
}