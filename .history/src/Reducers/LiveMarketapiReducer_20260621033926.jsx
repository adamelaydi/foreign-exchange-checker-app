// APIS DATA
import { GetLiveMarketData } from "../API/LiveMarkeAPI";

export default async function LiveMarketapiReducer(state,action){
    switch(action.type){
        case "get":{
            data=await GetLiveMarketData(action.payload.base,action.payload.quote);
        }
    }
}