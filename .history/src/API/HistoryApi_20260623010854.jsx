// AXIOS
import axios from "axios";
export async function GetHistory(group="month" ,base="USD",quote="EGP",begin="2026-06-01"){
    try {
        const url=`https://api.frankfurter.dev/v2/rates?from=${begin}&group=${group}&base=${base}&quote=${quote} `;
        const response = await axios.get(url);
        console.log(response.data)
        return response.data; 
    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
}
