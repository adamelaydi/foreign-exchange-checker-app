import axios from "axios";

function getFromDate(daysBack) {
    const date = new Date();
    date.setDate(date.getDate() - daysBack);
    return date.toISOString().split("T")[0]; // "YYYY-MM-DD"
}

export async function GetHistory(base = "USD", quote = "EUR", type = "1d") {
    let url;
    let from;

    switch (type) {
        case "1d": {
            url = `https://api.frankfurter.dev/v2/rates?from=2026-6-22`;
            break;
        }

        case "1w": {
            from = getFromDate(7);
            console.log(from)
            url = `https://api.frankfurter.dev/v2/rates?group=week&from=${from}`;
            break;
        }

        case "1m": {
            from = getFromDate(30);
            url = `https://api.frankfurter.dev/v2/rates?group=month&from=${from}`;
            break;
        }

        case "3m": {
            from = getFromDate(90);
            url = `https://api.frankfurter.dev/v2/rates?group=month&from=${from}`;
            break;
        }

        case "1y": {
            from = getFromDate(365);
            url = `https://api.frankfurter.dev/v2/rates?group=month&from=${from}`;
            break;
        }

        case "5y": {
            from = getFromDate(365 * 5);
            url = `https://api.frankfurter.dev/v2/rates?group=month&from=${from}`;
            break;
        }

        default: {
            throw new Error("Invalid type");
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