

export default async function LiveMarketapiReducer(state,action){
    switch(action.type){
        case "setData":{
            console.log(action.payload)
            return action.payload;
        }
        default:
            return state;
    }
}