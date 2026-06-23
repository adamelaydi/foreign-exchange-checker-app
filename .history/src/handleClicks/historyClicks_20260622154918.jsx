//API
import { GetHistory } from "../API/HistoryDataApi";

export async function handleDayClick(group ,base,quote,begin){ 
        let data =await GetHistory(group ,base,quote,begin);
        let Xval=[],Yval=[];
        data.map((d)=>{
                Xval.push(d.date);
                Yval.push(d.rate);
        })
        return {
                X:Xval,
                Y:Yval
        }
}

export async function handleWeekClick(group ,base,quote,begin){   
        let data =await GetHistory(group ,base,quote,begin);
        let Xval=[],Yval=[];
        data.map((d)=>{
                Xval.push(d.date);
                Yval.push(d.rate);
        })
        return {
                X:Xval,
                Y:Yval
        }
}

export async function handleMonthClick(group ,base,quote){
        let begin ;  
        let data =await GetHistory(group ,base,quote,begin);
        let Xval=[],Yval=[];
        data.map((d)=>{
                Xval.push(d.date);
                Yval.push(d.rate);
        })
        return {
                X:Xval,
                Y:Yval
        }
}