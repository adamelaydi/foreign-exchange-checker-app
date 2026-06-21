// AXIOS
import axios from "axios";
export function GetLiveMarketData(){
axios
.get("https://jsonplaceholder.typicode.com/posts", {
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