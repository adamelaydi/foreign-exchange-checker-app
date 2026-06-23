// AXIOS
import axios from "axios";
export async function GetHistory(group="month" ,base="USD",quote="EUR",begin="2026-06-01",type="1d"){
    let url;
    switch (type){
        case "1d":{
            url=`https://api.frankfurter.dev/v2/rates?base=${base}&quote=${}`
        }
    }
     url=`https://api.frankfurter.dev/v2/rates?from=2026-01-1&group=week&base=USD`;
    try {
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
}
