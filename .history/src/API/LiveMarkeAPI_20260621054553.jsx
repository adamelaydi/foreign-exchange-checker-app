import axios from "axios";
export async function GetLiveMarketData(base, quote) {
    try {
        const url = `https://api.frankfurter.dev/v2/rate/${base}/${quote}`;

        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        console.error("API Error:", error);
        return null;
    }
}