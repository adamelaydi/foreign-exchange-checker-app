//API
import { GetHistory } from "../API/HistoryDataApi";

export function handledayClick(group ,base,quote,begin){
        GetHistory(group ,base,quote,begin)
}