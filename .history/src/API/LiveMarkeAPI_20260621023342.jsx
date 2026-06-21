// AXIOS
import axios from "axios";
export function GetLiveMarketData(base,qoute){
    let url=`https://api.frankfurter.dev/v2/rate/${base}/$USD `
axios
.get(url, {
    params: {
        postId: 5,
        },
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Request completed");
    });
}