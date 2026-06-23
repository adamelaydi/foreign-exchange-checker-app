//API
import { GetHistory } from "../API/HistoryApi";

export async function handleDayClick(base,quote){ 
        let data =await GetHistory(base, quote , "1d");
        let Xval=[],Yval=[];
        data.map((d)=>{
                if(d.quote===quote){
                        Xval.push(d.date);
                        Yval.push(d.rate);
                }
        })
        
        return {X:Xval,Y:Yval};
}

export async function handleWeekClick(base,quote){   
        let data =await GetHistory(base, quote , "1w");
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

export async function handleMonthClick(base,quote){ 
        let data =await  GetHistory(base, quote , "1m");
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

export async function handleThreeMonthClick(base,quote){
        let data =await GetHistory(base, quote , "3m");
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

export async function handleYearClick(base,quote){  
        let data =await GetHistory(base, quote , "1y");
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

export async function handleThreeYearClick(base,quote){
        let data =await GetHistory(base, quote , "5y");
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
export async function handleFiveYearClick(base,quote){
        let begin="" ;  
        let data =await GetHistory(base,quote,begin);
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