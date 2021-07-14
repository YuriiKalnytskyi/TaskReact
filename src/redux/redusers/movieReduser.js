import {SET_MOVIE, SET_MOVIE_ID, SET_VIDEO_ID , SEARCH} from "../actionTypes";


const initialState={
    movies:{},
    movie:{},
    video:{}
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
        case SET_VIDEO_ID:{
            return{
                ...state ,
                video: action.payload
            }
        }
        case SEARCH :{
            return{
                ...state ,
                movies: action.payload
            }
        }
        default:return state

    }

}