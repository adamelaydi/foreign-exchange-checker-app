// APIS DATA
import { GetLiveMarketData } from "../API/LiveMarkeAPI";

export default function LiveMarketapiReducer(state,action){
    switch(action.type){
        case "get":{
            data=async GetLiveMarketData(action.payload.base,action.payload.quote);
        }
    }
}