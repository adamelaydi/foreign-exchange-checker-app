//API
import { GetHistory } from "../API/HistoryDataApi";

export async function handledayClick(group ,base,quote,begin){
        const data=GetHistory(group ,base,quote,begin)
}