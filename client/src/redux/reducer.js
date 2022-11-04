import { ADD, DELETE, EDITE, GET, GETUSER } from "./actionTypes"


const init={
    users:null,
    loading:true
}
export const userReducer=(state=init,{type,payload})=>{
    switch(type){
        case GET:
            return {
                ...state,loading:false,users:payload
            };
            case ADD:
                return {
                    ...state,loading:false,users:[...state.users,payload]
                };
                case DELETE:
                return {
                    ...state,loading:false,users:state.users.filter(el=>el._id!==payload)
                };   
                case EDITE:
                    return {
                    ...state,loading:false,users:state.users.map(el=>el._id===payload?{...el,...payload}:el)
                    };       
        default:
            return state
    }

}
