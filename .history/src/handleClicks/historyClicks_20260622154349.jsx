//API
import { GetHistory } from "../API/HistoryDataApi";

export async function handledayClick(group ,base,quote,begin){
        let data =await GetHistory(group ,base,quote,begin);
        let Xval=[],Yval=[];
        data.map((d)=>{
                Xval.push(d.date)
        })
}