// AXIOS
import axios from "axios";
export async function GetHistory(base="USD",quote="EUR",type="1d"){
    let url;
    switch (type){
        case "1d":{
            url=`https://api.frankfurter.dev/v2/rates?base=${base}&quote=${quote}`;
            break;
        }
        case "1w":{
            // determine the today date in sec
            // today date - (604800sec)=> week in secound
            // convert the result to this form  2026-05-01
            url=`https://api.frankfurter.dev/v2/rates?group=week&from=${begin}`;
            break;
        }
        case "1m":{
            // determine the today date in sec
            // today date - (2 592 000 sec)=> week in secound
            // convert the result to this form  2026-05-01
            url=`https://api.frankfurter.dev/v2/rates?group=month&from=${begin}`;
            break;
        }
        case "3m":{
            url=`https://api.frankfurter.dev/v2/rates?group=month&from=${begin}`;
            break;
        }
        case "1y":{
            url=`https://api.frankfurter.dev/v2/rates?group=month&from=${begin}`;
            break;
        }
        case "5y":{
            url=`https://api.frankfurter.dev/v2/rates?group=month&from=${begin}`;
            break;
        }
    }
    try {
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
}
