// APIS DATA
import { GetLiveMarketData } from "../API/LiveMarkeAPI";


export default function LiveMarketapiReducer(state,action){
    switch(action.type){
        case "get":{
            GetLiveMarketData(action.payload.base,action.payload.quete)
        }
    }
}