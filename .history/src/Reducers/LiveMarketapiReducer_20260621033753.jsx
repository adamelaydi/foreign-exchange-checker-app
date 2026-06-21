// APIS DATA
import { GetLiveMarketData } from "../API/LiveMarkeAPI";

export default function LiveMarketapiReducer(state,action){
    switch(action.type){
        case "get":{
            GetLiveMarketData({...stateaction.payload.base,action.payload.quote});
        }
    }
}