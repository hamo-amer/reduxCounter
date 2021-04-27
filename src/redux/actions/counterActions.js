import { DECREMENT, INCREMENT } from "../constants/actionsTypes"

export const increment=(n)=>{
    return {
        type:INCREMENT,
        payload:n
    }
}
export const decrement=()=>{
    return {
        type:DECREMENT
    }
}