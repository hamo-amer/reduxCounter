import { DECREMENT, INCREMENT } from "../constants/actionsTypes"

const initState={
    count:0
}

const countReducer=(state=initState,{type,payload})=>{
    switch(type){
        case INCREMENT:
            return {
                ...state,count:state.count+payload
            }
        case DECREMENT:
            return {
                ...state,count:state.count-1
            }
        default:
            return state
    }
}
export default countReducer