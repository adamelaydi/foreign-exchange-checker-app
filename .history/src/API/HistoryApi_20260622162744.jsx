// AXIOS
import axios from "axios";
export async function GetHistory(group="" ,base,quote,begin){
    try {
        const url=`https://api.frankfurter.dev/v2/rates?from=${begin}&group=${group}&base=${base}&quote=${quote} `;
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
}
