import {SET_MOVIE} from "../actionTypes";


const initialState={
    movies:{}
}
export const movieReduser =(state=initialState , action)=>{
    switch (action.type) {
        case SET_MOVIE:{
            return{
                ...state ,
                movies: action.payload
            }
        }
        default:return state

    }

}