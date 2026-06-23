//API
import { GetHistory } from "../API/HistoryApi";

export async function handleDayClick(group ,base,quote,begin){ 
        let data =await GetHistory(group ,base,quote,begin);
        let Xval=[],Yval=[];
        data.map((d)=>{
                Xval.push(d.date);
                Yval.push(d.rate);
        })
        console.log
        return {X:Xval,Y:Yval};
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
        let begin="" ;  
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

export async function handleThreeMonthClick(group ,base,quote){
        let begin="" ;  
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

export async function handleYearClick(group ,base,quote){
        let begin="" ;  
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

export async function handleThreeYearClick(group ,base,quote){
        let begin="" ;  
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
export async function handleFiveYearClick(group ,base,quote){
        let begin="" ;  
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