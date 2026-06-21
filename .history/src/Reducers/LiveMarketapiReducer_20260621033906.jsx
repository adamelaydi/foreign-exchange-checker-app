// APIS DATA
import { GetLiveMarketData } from "../API/LiveMarkeAPI";

export default function LiveMarketapiReducer(state,action){
    switch(action.type){
        case "get":{
            data=aGetLiveMarketData(action.payload.base,action.payload.quote);
        }
    }
}