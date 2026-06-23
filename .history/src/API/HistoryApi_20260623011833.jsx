// AXIOS
import axios from "axios";
export async function GetHistory(group="month" ,base="USD",quote="EUR",begin="2026-06-01"){
    const url=`https://api.frankfurter.dev/v2/rates?from=2026-06-10&group=month&base=USD`;
    try {
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
}
