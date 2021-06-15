import {SET_MOVIE, SET_MOVIE_ID} from "../actionTypes";


const initialState={
    movies:{},
    movie:{}
}
export const movieReduser =(state=initialState , action)=>{
    switch (action.type) {
        case SET_MOVIE:{
            return{
                ...state ,
                movies: action.payload
            }
        }
        case SET_MOVIE_ID:{
            return{
                ...state ,
                movie: action.payload
            }
        }
        default:return state

    }

}